'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Truck, Shield } from 'lucide-react'
import { getPrintifyProducts, getProductPricing, type PrintifyProduct } from '@/lib/printify'

export default function ProductsPage() {
  const [products, setProducts] = useState<PrintifyProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const printifyProducts = await getPrintifyProducts()
      setProducts(printifyProducts)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getProductFeatures = (product: PrintifyProduct) => {
    const features: string[] = []
    
    // Add features based on product type
    if (product.title.toLowerCase().includes('t-shirt')) {
      features.push('100% Cotton', 'Multiple sizes', 'Machine washable', 'Custom fit')
    } else if (product.title.toLowerCase().includes('hoodie')) {
      features.push('Fleece lining', 'Kangaroo pocket', 'Adjustable drawstring', 'Durable')
    } else if (product.title.toLowerCase().includes('mug')) {
      features.push('Microwave safe', 'Dishwasher safe', '11oz capacity', 'Lead-free')
    } else if (product.title.toLowerCase().includes('poster')) {
      features.push('Premium paper', 'Fade resistant', 'Multiple sizes', 'Ready to frame')
    } else if (product.title.toLowerCase().includes('canvas')) {
      features.push('Gallery wrapped', 'UV resistant', 'Archival quality', 'Ready to hang')
    } else if (product.title.toLowerCase().includes('sticker')) {
      features.push('Weather resistant', 'Easy to apply', 'Removable', 'Long lasting')
    }
    
    return features
  }

  const getProductColors = (product: PrintifyProduct) => {
    if (product.variants && product.variants[0] && product.variants[0].options) {
      return product.variants[0].options.map((opt: any) => opt.value)
    }
    return []
  }

  const getProductSizes = (product: PrintifyProduct) => {
    if (product.title.toLowerCase().includes('t-shirt') || product.title.toLowerCase().includes('hoodie')) {
      return ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    } else if (product.title.toLowerCase().includes('poster') || product.title.toLowerCase().includes('canvas')) {
      return ['8" x 10"', '11" x 14"', '16" x 20"', '18" x 24"', '24" x 36"']
    } else if (product.title.toLowerCase().includes('sticker')) {
      return ['2" x 2"', '3" x 3"', '4" x 4"', '5" x 5"']
    }
    return []
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
                    <path d="m14 7 3 3"></path>
                    <path d="M5 6v4"></path>
                    <path d="M19 14v4"></path>
                    <path d="M10 2v2"></path>
                    <path d="M7 8H3"></path>
                    <path d="M21 16h-4"></path>
                    <path d="M11 3H9"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">GenifyDesigns</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/create" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Create Design</Link>
                <Link href="/products" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/create" className="btn-primary">Start Creating</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Product Collection
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From clothing to home decor, discover our range of high-quality products 
            that can showcase your AI-generated designs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = 'none'
                      const nextElement = target.nextElementSibling as HTMLElement
                      if (nextElement) {
                        nextElement.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-2xl" style={{display: 'none'}}>
                    {product.title.charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">${getProductPricing(product.id).base.toFixed(2)}</span>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-gray-600 text-sm ml-1">(4.9)</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {getProductFeatures(product).map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {getProductColors(product).length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {getProductColors(product).map((color) => (
                        <span key={color} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {getProductSizes(product).length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {getProductSizes(product).map((size) => (
                        <span key={size} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link 
                  href={`/create?product=${product.id}`}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Create Design
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600">Quality, durability, and style in every item</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                All our products are made with the highest quality materials, 
                ensuring durability and comfort.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Shipping</h3>
              <p className="text-gray-600">
                Get your custom products delivered to your door within 3-5 business days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Join thousands of satisfied customers who love their custom designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your product and start designing with AI today
          </p>
          <Link href="/create" className="inline-flex items-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Start Creating Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
                    <path d="m14 7 3 3"></path>
                    <path d="M5 6v4"></path>
                    <path d="M19 14v4"></path>
                    <path d="M10 2v2"></path>
                    <path d="M7 8H3"></path>
                    <path d="M21 16h-4"></path>
                    <path d="M11 3H9"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">GenifyDesigns</span>
              </div>
              <p className="text-gray-400">AI-powered print-on-demand platform for creative expression.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products#tshirt" className="hover:text-white transition-colors">T-Shirts</Link></li>
                <li><Link href="/products#hoodie" className="hover:text-white transition-colors">Hoodies</Link></li>
                <li><Link href="/products#mug" className="hover:text-white transition-colors">Mugs</Link></li>
                <li><Link href="/products#poster" className="hover:text-white transition-colors">Posters</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 GenifyDesigns. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 