'use client'

import React, { useEffect, useState } from 'react'
import { CheckCircle, Download, Mail, ArrowRight, Home } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface OrderDetails {
  sessionId: string
  productName: string
  price: string
  imageUrl: string
  prompt: string
  orderNumber: string
  estimatedDelivery: string
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // In production, fetch order details from your database
      // For demo, we'll simulate the order details
      setTimeout(() => {
        setOrderDetails({
          sessionId,
          productName: 'Custom T-Shirt',
          price: '$24.95',
          imageUrl: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Your+Design',
          prompt: 'A flamingo DJ in retro style',
          orderNumber: `GD-${Date.now().toString().slice(-6)}`,
          estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        })
        setLoading(false)
      }, 1000)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    )
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-6">We couldn't find your order details.</p>
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-gray-600">
            Thank you for your purchase. Your order is being processed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Order Details */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Order Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Product:</span>
                <span className="font-medium">{orderDetails.productName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium">{orderDetails.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery:</span>
                <span className="font-medium">{orderDetails.estimatedDelivery}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Your Design Prompt</h3>
              <p className="text-blue-800 italic">"{orderDetails.prompt}"</p>
            </div>
          </div>

          {/* Design Preview */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Design
            </h2>
            
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <img
                src={orderDetails.imageUrl}
                alt="Your generated design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-3">
              <button className="btn-secondary w-full flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download Design
              </button>
              <button className="btn-primary w-full flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Share Design
              </button>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            What Happens Next?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
              <p className="text-gray-600 text-sm">
                We'll review your design and prepare it for printing within 24 hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">
                Your product will be printed and quality-checked by our fulfillment partner.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
              <p className="text-gray-600 text-sm">
                Your order will be shipped and you'll receive tracking information via email.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/create" className="btn-primary flex items-center justify-center">
            Create Another Design
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/" className="btn-secondary flex items-center justify-center">
            <Home className="mr-2 w-5 h-5" />
            Return Home
          </Link>
        </div>

        {/* Support Info */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact Support
            </Link>
            <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
              FAQ
            </Link>
            <Link href="/tracking" className="text-blue-600 hover:text-blue-700 font-medium">
              Track Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 