import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createOrder, updateOrderStatus } from '@/lib/orders'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        
        // Create order in Firebase
        if (session.metadata) {
          await createOrder({
            customerEmail: session.customer_email || 'unknown@example.com',
            productId: session.metadata.productId || 'unknown',
            productName: session.metadata.productName || 'Custom Product',
            price: session.amount_total ? session.amount_total / 100 : 0,
            imageUrl: session.metadata.imageUrl || '',
            prompt: session.metadata.prompt || '',
            stripeSessionId: session.id,
            status: 'pending',
          })
        }
        break

      case 'payment_intent.succeeded':
        // Handle successful payment
        console.log('Payment succeeded:', event.data.object.id)
        break

      case 'payment_intent.payment_failed':
        // Handle failed payment
        console.log('Payment failed:', event.data.object.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
} 