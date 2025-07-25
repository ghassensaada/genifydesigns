import Link from 'next/link'
import { ArrowRight, Star, Truck, Shield } from 'lucide-react'

const products = [
  {
    id: 'tshirt',
    name: 'Premium Cotton T-Shirt',
    price: '$24.95',
    image: '/images/tshirt-product.jpg',
    description: 'High-quality 100% cotton t-shirt with your custom design',
    features: ['100% Cotton', 'Multiple sizes', 'Machine washable', 'Custom fit'],
    colors: ['White', 'Black', 'Navy', 'Gray', 'Red', 'Green'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'hoodie',
    name: 'Comfortable Hoodie',
    price: '$39.95',
    image: '/images/hoodie-product.jpg',
    description: 'Warm and cozy hoodie perfect for any season',
    features: ['Fleece lining', 'Kangaroo pocket', 'Adjustable drawstring', 'Durable'],
    colors: ['Black', 'Gray', 'Navy', 'Burgundy', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'mug',
    name: 'Ceramic Coffee Mug',
    price: '$14.95',
    image: '/images/mug-product.jpg',
    description: 'Perfect for your morning coffee with a personal touch',
    features: ['Microwave safe', 'Dishwasher safe', '11oz capacity', 'Lead-free'],
    colors: ['White', 'Black', 'Red', 'Blue', 'Green']
  },
  {
    id: 'poster',
    name: 'High-Quality Poster',
    price: '$19.95',
    image: '/images/poster-product.jpg',
    description: 'Vibrant prints perfect for home or office decoration',
    features: ['Premium paper', 'Fade resistant', 'Multiple sizes', 'Ready to frame'],
    sizes: ['8" x 10"', '11" x 14"', '16" x 20"', '18" x 24"', '24" x 36"']
  },
  {
    id: 'canvas',
    name: 'Gallery Canvas Print',
    price: '$29.95',
    image: '/images/canvas-product.jpg',
    description: 'Museum-quality canvas prints that last a lifetime',
    features: ['Gallery wrapped', 'UV resistant', 'Archival quality', 'Ready to hang'],
    sizes: ['8" x 10"', '11" x 14"', '16" x 20"', '18" x 24"', '24" x 36"']
  },
  {
    id: 'sticker',
    name: 'Vinyl Stickers',
    price: '$4.95',
    image: '/images/sticker-product.jpg',
    description: 'Durable vinyl stickers for laptops, water bottles, and more',
    features: ['Weather resistant', 'Easy to apply', 'Removable', 'Long lasting'],
    sizes: ['2" x 2"', '3" x 3"', '4" x 4"', '5" x 5"']
  }
]

export default function ProductsPage() {
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
                    src={product.image} 
                    alt={product.name}
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
                    {product.name.charAt(0)}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
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
                    {product.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {product.colors && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span key={color} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
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