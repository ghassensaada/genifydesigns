'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Wand2, Palette, Ruler } from 'lucide-react'
import toast from 'react-hot-toast'

const products = [
  {
    id: 'tshirt',
    name: 'T-Shirt',
    price: '$24.95',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    colors: ['White', 'Black', 'Navy', 'Gray', 'Red', 'Green'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'hoodie',
    name: 'Hoodie',
    price: '$39.95',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center',
    colors: ['Black', 'Gray', 'Navy', 'Burgundy', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'mug',
    name: 'Mug',
    price: '$14.95',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop&crop=center',
    colors: ['White', 'Black', 'Red', 'Blue', 'Green']
  },
  {
    id: 'poster',
    name: 'Poster',
    price: '$19.95',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center',
    sizes: ['8" x 10"', '11" x 14"', '16" x 20"', '18" x 24"', '24" x 36"']
  },
  {
    id: 'canvas',
    name: 'Canvas Print',
    price: '$29.95',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center',
    sizes: ['8" x 10"', '11" x 14"', '16" x 20"', '18" x 24"', '24" x 36"']
  },
  {
    id: 'sticker',
    name: 'Sticker',
    price: '$4.95',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
    sizes: ['2" x 2"', '3" x 3"', '4" x 4"', '5" x 5"']
  }
]

const suggestedPrompts = [
  'A flamingo DJ in retro style',
  'Cosmic cats playing chess',
  'Robot gardener tending to digital flowers',
  'Steampunk butterfly with mechanical wings',
  'Abstract geometric patterns in neon colors',
  'Vintage space travel poster style',
  'Cyberpunk cityscape at sunset',
  'Whimsical forest creatures having a tea party'
]

export default function CreatePage() {
  const [prompt, setPrompt] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [generatedImage, setGeneratedImage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a design description')
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      const data = await response.json()

      if (data.success) {
        setGeneratedImage(data.imageUrl)
        toast.success('Design generated successfully!')
      } else {
        toast.error('Failed to generate design')
      }
    } catch (error) {
      console.error('Error generating design:', error)
      toast.error('Error generating design')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleProductSelect = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setSelectedColor('')
    setSelectedSize('')
  }

  const getMockupImage = () => {
    if (!generatedImage) {
      return 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center'
    }
    
    // In a real implementation, you would overlay the generated design on the product mockup
    // For now, we'll use the generated image directly
    return generatedImage
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
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
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Your Design</h1>
          <p className="text-xl text-gray-600">Describe your vision and watch AI bring it to life</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input and Product Selection */}
          <div className="space-y-8">
            {/* Describe Your Vision */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Describe Your Vision</h2>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A flamingo DJ in retro style, cosmic cats playing chess, robot gardener tending to digital flowers..."
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              />
              
              {/* Suggested Prompts */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Try these prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((suggestedPrompt) => (
                    <button
                      key={suggestedPrompt}
                      onClick={() => setPrompt(suggestedPrompt)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                    >
                      {suggestedPrompt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="mt-4 w-full btn-primary flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Generate Design
                  </>
                )}
              </button>
            </div>

            {/* Choose Your Product */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Choose Your Product</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className={`card cursor-pointer transition-all hover:shadow-lg ${
                      selectedProduct.id === product.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                                             <img 
                         src={product.image} 
                         alt={product.name}
                         className="w-12 h-12 object-cover rounded"
                         onError={(e) => {
                           // Fallback to a simple icon if image fails to load
                           const target = e.currentTarget as HTMLImageElement
                           target.style.display = 'none'
                           const nextElement = target.nextElementSibling as HTMLElement
                           if (nextElement) {
                             nextElement.style.display = 'block'
                           }
                         }}
                       />
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                        {product.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-center mb-1">{product.name}</h3>
                    <p className="text-blue-600 font-medium text-center">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {selectedProduct.colors && (
              <div className="card">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Palette className="w-6 h-6 mr-2 text-blue-600" />
                  Choose Color
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedColor === color 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-sm font-medium text-gray-900">{color}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {selectedProduct.sizes && (
              <div className="card">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Ruler className="w-6 h-6 mr-2 text-blue-600" />
                  Choose Size
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedSize === size 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-sm font-medium text-gray-900">{size}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Generated Design and Tips */}
          <div className="space-y-8">
            {/* Your Generated Design */}
            <div className="card">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Generated Design</h2>
              <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                {generatedImage ? (
                  <img 
                    src={getMockupImage()} 
                    alt="Generated design" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <Wand2 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p>Your design will appear here</p>
                  </div>
                )}
              </div>
              
              {generatedImage && (
                <div className="mt-4 space-y-3">
                  <button className="w-full btn-primary">
                    Add to Cart - {selectedProduct.price}
                  </button>
                  <button className="w-full btn-secondary">
                    Generate Another Design
                  </button>
                </div>
              )}
            </div>

            {/* Design Tips */}
            <div className="card bg-blue-50 border-blue-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                Design Tips
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Be specific about style, colors, and mood</li>
                <li>• Include details like 'vintage,' 'minimalist,' or 'cyberpunk'</li>
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