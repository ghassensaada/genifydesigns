import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createOrder } from '@/lib/orders'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      // Create order in database
      await createOrder({
        customerEmail: session.customer_details?.email || 'unknown@example.com',
        productId: session.metadata?.productId || 'unknown',
        productName: session.metadata?.productName || 'Custom Product',
        price: session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : '$0.00',
        imageUrl: session.metadata?.imageUrl || '',
        prompt: session.metadata?.prompt || '',
        status: 'pending',
      })

      console.log('Order created successfully for session:', session.id)
    } catch (error) {
      console.error('Error creating order:', error)
      return NextResponse.json(
        { error: 'Failed to create order' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
} 