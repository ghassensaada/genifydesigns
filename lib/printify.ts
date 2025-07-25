const PRINTIFY_API_BASE = 'https://api.printify.com/v1'

export interface PrintifyProduct {
  id: string
  title: string
  description: string
  brand: string
  model: string
  images: string[]
  variants: PrintifyVariant[]
  options: PrintifyOption[]
  is_enabled: boolean
}

export interface PrintifyVariant {
  id: number
  title: string
  options: {
    id: number
    value: string
  }[]
  placeholders: PrintifyPlaceholder[]
}

export interface PrintifyOption {
  id: number
  name: string
  type: string
  values: {
    id: number
  }[]
}

export interface PrintifyPlaceholder {
  position: string
  images: {
    id: number
    name: string
    src: string
  }[]
}

export interface PrintifyShop {
  id: string
  title: string
  sales_channel: string
}

// Fetch all available products from Printify
export async function getPrintifyProducts(): Promise<PrintifyProduct[]> {
  try {
    const response = await fetch(`${PRINTIFY_API_BASE}/catalog/products.json`, {
      headers: {
        'Authorization': `Bearer ${process.env.PRINTIFY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Printify API error: ${response.status}`)
    }

    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error('Error fetching Printify products:', error)
    // Return mock data if API is not available
    return getMockPrintifyProducts()
  }
}

// Get specific product details with mockups
export async function getPrintifyProduct(productId: string): Promise<PrintifyProduct | null> {
  try {
    const response = await fetch(`${PRINTIFY_API_BASE}/catalog/products/${productId}.json`, {
      headers: {
        'Authorization': `Bearer ${process.env.PRINTIFY_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Printify API error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching Printify product:', error)
    return null
  }
}

// Mock data for development/testing
function getMockPrintifyProducts(): PrintifyProduct[] {
  return [
    {
      id: '1',
      title: 'Unisex T-Shirt',
      description: 'Premium cotton t-shirt with custom design',
      brand: 'Printify',
      model: 'Unisex T-Shirt',
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
      ],
      variants: [
        {
          id: 1,
          title: 'Unisex T-Shirt',
          options: [
            { id: 1, value: 'White' },
            { id: 2, value: 'Black' },
            { id: 3, value: 'Navy' },
            { id: 4, value: 'Gray' },
            { id: 5, value: 'Red' },
            { id: 6, value: 'Green' }
          ],
          placeholders: [
            {
              position: 'front',
              images: [
                {
                  id: 1,
                  name: 'Front View',
                  src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center'
                }
              ]
            },
            {
              position: 'back',
              images: [
                {
                  id: 2,
                  name: 'Back View',
                  src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center'
                }
              ]
            }
          ]
        }
      ],
      options: [
        {
          id: 1,
          name: 'Size',
          type: 'select',
          values: [
            { id: 1 }, // XS
            { id: 2 }, // S
            { id: 3 }, // M
            { id: 4 }, // L
            { id: 5 }, // XL
            { id: 6 }  // XXL
          ]
        },
        {
          id: 2,
          name: 'Color',
          type: 'select',
          values: [
            { id: 1 }, // White
            { id: 2 }, // Black
            { id: 3 }, // Navy
            { id: 4 }, // Gray
            { id: 5 }, // Red
            { id: 6 }  // Green
          ]
        }
      ],
      is_enabled: true
    },
    {
      id: '2',
      title: 'Unisex Hoodie',
      description: 'Comfortable hoodie perfect for any season',
      brand: 'Printify',
      model: 'Unisex Hoodie',
      images: [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center'
      ],
      variants: [
        {
          id: 2,
          title: 'Unisex Hoodie',
          options: [
            { id: 1, value: 'Black' },
            { id: 2, value: 'Gray' },
            { id: 3, value: 'Navy' },
            { id: 4, value: 'Burgundy' },
            { id: 5, value: 'Olive' }
          ],
          placeholders: [
            {
              position: 'front',
              images: [
                {
                  id: 1,
                  name: 'Front View',
                  src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center'
                }
              ]
            },
            {
              position: 'back',
              images: [
                {
                  id: 2,
                  name: 'Back View',
                  src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center'
                }
              ]
            }
          ]
        }
      ],
      options: [
        {
          id: 1,
          name: 'Size',
          type: 'select',
          values: [
            { id: 1 }, // S
            { id: 2 }, // M
            { id: 3 }, // L
            { id: 4 }, // XL
            { id: 5 }  // XXL
          ]
        },
        {
          id: 2,
          name: 'Color',
          type: 'select',
          values: [
            { id: 1 }, // Black
            { id: 2 }, // Gray
            { id: 3 }, // Navy
            { id: 4 }, // Burgundy
            { id: 5 }  // Olive
          ]
        }
      ],
      is_enabled: true
    },
    {
      id: '3',
      title: 'Ceramic Mug',
      description: 'Perfect for your morning coffee with a personal touch',
      brand: 'Printify',
      model: 'Ceramic Mug',
      images: [
        'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop&crop=center'
      ],
      variants: [
        {
          id: 3,
          title: 'Ceramic Mug',
          options: [
            { id: 1, value: 'White' },
            { id: 2, value: 'Black' },
            { id: 3, value: 'Red' },
            { id: 4, value: 'Blue' },
            { id: 5, value: 'Green' }
          ],
          placeholders: [
            {
              position: 'front',
              images: [
                {
                  id: 1,
                  name: 'Front View',
                  src: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop&crop=center'
                }
              ]
            }
          ]
        }
      ],
      options: [
        {
          id: 1,
          name: 'Color',
          type: 'select',
          values: [
            { id: 1 }, // White
            { id: 2 }, // Black
            { id: 3 }, // Red
            { id: 4 }, // Blue
            { id: 5 }  // Green
          ]
        }
      ],
      is_enabled: true
    },
    {
      id: '4',
      title: 'Poster',
      description: 'Vibrant prints perfect for home or office decoration',
      brand: 'Printify',
      model: 'Poster',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center'
      ],
      variants: [
        {
          id: 4,
          title: 'Poster',
          options: [
            { id: 1, value: 'Standard' }
          ],
          placeholders: [
            {
              position: 'front',
              images: [
                {
                  id: 1,
                  name: 'Front View',
                  src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center'
                }
              ]
            }
          ]
        }
      ],
      options: [
        {
          id: 1,
          name: 'Size',
          type: 'select',
          values: [
            { id: 1 }, // 8" x 10"
            { id: 2 }, // 11" x 14"
            { id: 3 }, // 16" x 20"
            { id: 4 }, // 18" x 24"
            { id: 5 }  // 24" x 36"
          ]
        }
      ],
      is_enabled: true
    },
    {
      id: '5',
      title: 'Canvas Print',
      description: 'Museum-quality canvas prints that last a lifetime',
      brand: 'Printify',
      model: 'Canvas Print',
      images: [
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center'
      ],
      variants: [
        {
          id: 5,
          title: 'Canvas Print',
          options: [
            { id: 1, value: 'Standard' }
          ],
          placeholders: [
            {
              position: 'front',
              images: [
                {
                  id: 1,
                  name: 'Front View',
                  src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center'
                }
              ]
            }
          ]
        }
      ],
      options: [
        {
          id: 1,
          name: 'Size',
          type: 'select',
          values: [
            { id: 1 }, // 8" x 10"
            { id: 2 }, // 11" x 14"
            { id: 3 }, // 16" x 20"
            { id: 4 }, // 18" x 24"
            { id: 5 }  // 24" x 36"
          ]
        }
      ],
      is_enabled: true
    },
    {
      id: '6',
      title: 'Vinyl Stickers',
      description: 'Durable vinyl stickers for laptops, water bottles, and more',
      brand: 'Printify',
      model: 'Vinyl Stickers',
      images: [
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center'
      ],
      variants: [
        {
          id: 6,
          title: 'Vinyl Stickers',
          options: [
            { id: 1, value: 'Standard' }
          ],
          placeholders: [
            {
              position: 'front',
              images: [
                {
                  id: 1,
                  name: 'Front View',
                  src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center'
                }
              ]
            }
          ]
        }
      ],
      options: [
        {
          id: 1,
          name: 'Size',
          type: 'select',
          values: [
            { id: 1 }, // 2" x 2"
            { id: 2 }, // 3" x 3"
            { id: 3 }, // 4" x 4"
            { id: 4 }  // 5" x 5"
          ]
        }
      ],
      is_enabled: true
    }
  ]
}

// Get product pricing (mock for now)
export function getProductPricing(productId: string): { base: number, currency: string } {
  const pricing: Record<string, { base: number, currency: string }> = {
    '1': { base: 24.95, currency: 'USD' }, // T-Shirt
    '2': { base: 39.95, currency: 'USD' }, // Hoodie
    '3': { base: 14.95, currency: 'USD' }, // Mug
    '4': { base: 19.95, currency: 'USD' }, // Poster
    '5': { base: 29.95, currency: 'USD' }, // Canvas
    '6': { base: 4.95, currency: 'USD' }   // Stickers
  }
  
  return pricing[productId] || { base: 19.95, currency: 'USD' }
} 