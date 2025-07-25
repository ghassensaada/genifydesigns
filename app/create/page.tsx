'use client'

import React, { useState, useEffect } from 'react'
import { Wand2, Sparkles, Download, ShoppingCart, ArrowLeft, RefreshCw, Mail } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

export default function CreatePage() {
  const searchParams = useSearchParams()
  const initialProduct = searchParams.get('product') || 'tshirt'
  
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState(initialProduct)
  const [customerEmail, setCustomerEmail] = useState('')

  const examplePrompts = [
    'A flamingo DJ in retro style',
    'Cosmic cats playing chess',
    'Robot gardener tending to digital flowers',
    'Steampunk butterfly with mechanical wings',
    'Abstract geometric patterns in neon colors',
    'Vintage space travel poster style',
    'Cyberpunk cityscape at sunset',
    'Whimsical forest creatures having a tea party',
  ]

  const products = [
    { id: 'tshirt', name: 'T-Shirt', icon: '👕', price: '$24.95' },
    { id: 'hoodie', name: 'Hoodie', icon: '🧥', price: '$39.95' },
    { id: 'mug', name: 'Mug', icon: '☕', price: '$14.95' },
    { id: 'poster', name: 'Poster', icon: '🖼️', price: '$19.95' },
    { id: 'canvas', name: 'Canvas Print', icon: '🎨', price: '$29.95' },
    { id: 'sticker', name: 'Sticker', icon: '🏷️', price: '$4.95' },
  ]

  const generateDesign = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a design prompt')
      return
    }

    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          style: 'artistic'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate design')
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
      
      toast.success('Design generated successfully!')
    } catch (error) {
      console.error('Generation error:', error)
      toast.error('Failed to generate design. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const regenerateDesign = () => {
    if (prompt.trim()) {
      generateDesign()
    }
  }

  const handleCheckout = async () => {
    if (!generatedImage || !customerEmail) {
      toast.error('Please generate a design and enter your email')
      return
    }

    const selectedProductData = products.find(p => p.id === selectedProduct)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: selectedProduct,
          productName: selectedProductData?.name || 'Custom Product',
          price: selectedProductData?.price || '$24.95',
          imageUrl: generatedImage,
          prompt: prompt,
          customerEmail: customerEmail,
          quantity: 1
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()
      
      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      toast.error('Failed to process checkout. Please try again.')
    }
  }

  const downloadDesign = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = `genifydesign-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      toast.success('Design downloaded!')
    }
  }

  const shareDesign = () => {
    if (generatedImage && navigator.share) {
      navigator.share({
        title: 'My AI-Generated Design',
        text: `Check out this design I created with GenifyDesigns: "${prompt}"`,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GenifyDesigns
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your Design
          </h1>
          <p className="text-xl text-gray-600">
            Describe your vision and watch AI bring it to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Prompt Input */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Describe Your Vision
              </h2>
              
              <div className="space-y-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A flamingo DJ in retro style, cosmic cats playing chess, robot gardener tending to digital flowers..."
                  className="input-field h-32 resize-none"
                  disabled={isGenerating}
                />
                
                <div className="flex flex-wrap gap-2">
                  {examplePrompts.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(example)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                      disabled={isGenerating}
                    >
                      {example}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={generateDesign}
                  disabled={isGenerating || !prompt.trim()}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Design
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Product Selection */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Choose Your Product
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedProduct === product.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{product.icon}</div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-blue-600">{product.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email Collection */}
            {generatedImage && (
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ready to Order?
                </h3>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="Enter your email for order updates"
                    className="input-field"
                  />
                  
                  <button
                    onClick={handleCheckout}
                    disabled={!customerEmail.trim()}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now - {products.find(p => p.id === selectedProduct)?.price}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Generated Design */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Generated Design
              </h2>
              
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                {isGenerating ? (
                  <div className="text-center">
                    <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Creating your design...</p>
                  </div>
                ) : generatedImage ? (
                  <img
                    src={generatedImage}
                    alt="Generated design"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Wand2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Your design will appear here</p>
                  </div>
                )}
              </div>
              
              {generatedImage && (
                <div className="space-y-3">
                  <button
                    onClick={regenerateDesign}
                    disabled={isGenerating}
                    className="btn-secondary w-full flex items-center justify-center"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate Design
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={downloadDesign}
                      className="btn-secondary flex items-center justify-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button 
                      onClick={shareDesign}
                      className="btn-secondary flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Product Preview */}
            {generatedImage && (
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Preview on {products.find(p => p.id === selectedProduct)?.name}
                </h3>
                
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">
                      {products.find(p => p.id === selectedProduct)?.icon}
                    </div>
                    <p>Product mockup will be generated</p>
                    <p className="text-sm mt-2">
                      {products.find(p => p.id === selectedProduct)?.price}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="card bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                💡 Design Tips
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Be specific about style, colors, and mood</li>
                <li>• Include details like "vintage," "minimalist," or "cyberpunk"</li>
                <li>• Mention specific elements you want to see</li>
                <li>• Try different prompts to get varied results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 