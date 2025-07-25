import React from 'react'
import Link from 'next/link'
import { ArrowRight, Star, ShoppingBag } from 'lucide-react'

const products = [
  {
    id: 'tshirt',
    name: 'T-Shirts',
    description: 'Premium cotton t-shirts with your AI-generated designs',
    price: '$24.95',
    icon: '👕',
    features: ['100% Cotton', 'Multiple sizes', 'Fast shipping', 'Premium print quality'],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: '/api/placeholder/400/300?text=T-Shirt+Design'
  },
  {
    id: 'hoodie',
    name: 'Hoodies',
    description: 'Comfortable hoodies perfect for showcasing your unique designs',
    price: '$39.95',
    icon: '🧥',
    features: ['Fleece-lined', 'Kangaroo pocket', 'Drawstring hood', 'Durable print'],
    colors: ['Black', 'Gray', 'Navy', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/api/placeholder/400/300?text=Hoodie+Design'
  },
  {
    id: 'mug',
    name: 'Mugs',
    description: 'Ceramic mugs that make every sip a statement',
    price: '$14.95',
    icon: '☕',
    features: ['11oz ceramic', 'Microwave safe', 'Dishwasher safe', 'Vibrant colors'],
    colors: ['White', 'Black', 'Red', 'Blue'],
    sizes: ['Standard'],
    image: '/api/placeholder/400/300?text=Mug+Design'
  },
  {
    id: 'poster',
    name: 'Posters',
    description: 'High-quality posters perfect for home or office decor',
    price: '$19.95',
    icon: '🖼️',
    features: ['Premium paper', 'Multiple sizes', 'Fade resistant', 'Ready to frame'],
    colors: ['Full color'],
    sizes: ['8x10', '11x14', '16x20', '18x24'],
    image: '/api/placeholder/400/300?text=Poster+Design'
  },
  {
    id: 'canvas',
    name: 'Canvas Prints',
    description: 'Gallery-quality canvas prints that bring your designs to life',
    price: '$29.95',
    icon: '🎨',
    features: ['Gallery wrapped', 'Museum quality', 'UV resistant', 'Ready to hang'],
    colors: ['Full color'],
    sizes: ['12x12', '16x16', '20x20', '24x24'],
    image: '/api/placeholder/400/300?text=Canvas+Design'
  },
  {
    id: 'sticker',
    name: 'Stickers',
    description: 'High-quality vinyl stickers for laptops, water bottles, and more',
    price: '$4.95',
    icon: '🏷️',
    features: ['Weather resistant', 'UV protected', 'Easy to apply', 'Removable'],
    colors: ['Full color'],
    sizes: ['3x3', '4x4', '5x5'],
    image: '/api/placeholder/400/300?text=Sticker+Design'
  },
  {
    id: 'tote',
    name: 'Tote Bags',
    description: 'Eco-friendly tote bags with your personalized designs',
    price: '$19.95',
    icon: '👜',
    features: ['Cotton canvas', 'Reinforced handles', 'Washable', 'Eco-friendly'],
    colors: ['Natural', 'Black', 'Navy'],
    sizes: ['Standard'],
    image: '/api/placeholder/400/300?text=Tote+Design'
  },
  {
    id: 'phonecase',
    name: 'Phone Cases',
    description: 'Protective phone cases featuring your AI-generated artwork',
    price: '$24.95',
    icon: '📱',
    features: ['Drop protection', 'Precise cutouts', 'Slim design', 'Scratch resistant'],
    colors: ['Clear', 'Black', 'White'],
    sizes: ['iPhone 13', 'iPhone 14', 'Samsung Galaxy', 'Google Pixel'],
    image: '/api/placeholder/400/300?text=Phone+Case+Design'
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                ← Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GenifyDesigns
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of high-quality products. Each item is printed with your unique AI-generated design, 
            ensuring you get a truly personalized product.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="card hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">{product.icon}</div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-600 text-sm ml-1">(4.9)</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Options */}
              <div className="mb-6">
                <div className="mb-3">
                  <h4 className="font-medium text-gray-900 mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Available Sizes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link 
                href={`/create?product=${product.id}`}
                className="btn-primary w-full flex items-center justify-center"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Create Design
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Choose your product and let our AI bring your ideas to life
          </p>
          <Link href="/create" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
            Start Creating Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the AI design generation work?</h3>
              <p className="text-gray-600">
                Simply describe what you want to see in plain English. Our AI will instantly create a unique design based on your description, 
                which you can then apply to any of our products.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the quality of the products?</h3>
              <p className="text-gray-600">
                We use premium materials and high-quality printing processes. All products are made to last and come with our quality guarantee.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does shipping take?</h3>
              <p className="text-gray-600">
                Most orders ship within 2-3 business days. Delivery typically takes 5-7 business days in the US, 
                with expedited shipping options available.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I return my order?</h3>
              <p className="text-gray-600">
                Yes! We offer a 30-day return policy for all products. If you're not satisfied, 
                we'll provide a full refund or replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 