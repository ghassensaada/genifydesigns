// Order interface
export interface Order {
  id: string
  customerEmail: string
  productId: string
  productName: string
  price: string
  imageUrl: string
  prompt: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: string
  updatedAt: string
  stripeSessionId?: string
  printifyOrderId?: string
}

// Mock data for development
export const mockOrders: Order[] = [
  {
    id: '1',
    customerEmail: 'test@example.com',
    productId: 'tshirt',
    productName: 'Custom T-Shirt',
    price: '$24.95',
    imageUrl: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Design',
    prompt: 'A beautiful sunset over mountains',
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Firebase functions (will be implemented when Firebase is properly configured)
export const createOrder = async (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> => {
  // For now, return mock data
  const newOrder: Order = {
    ...orderData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  
  console.log('Creating order:', newOrder)
  return newOrder
}

export const getOrdersByEmail = async (email: string): Promise<Order[]> => {
  // For now, return mock data
  return mockOrders.filter(order => order.customerEmail === email)
}

export const getOrderById = async (id: string): Promise<Order | null> => {
  // For now, return mock data
  return mockOrders.find(order => order.id === id) || null
}

export const updateOrderStatus = async (id: string, status: Order['status']): Promise<void> => {
  console.log(`Updating order ${id} status to ${status}`)
}

export const getAllOrders = async (): Promise<Order[]> => {
  // For now, return mock data
  return mockOrders
} 