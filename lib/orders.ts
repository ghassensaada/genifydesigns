import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  doc, 
  updateDoc,
  Timestamp 
} from 'firebase/firestore'
import { db } from './firebase'

export interface Order {
  id?: string
  customerEmail: string
  productId: string
  productName: string
  price: number
  imageUrl: string
  prompt: string
  stripeSessionId: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: Timestamp
  updatedAt: Timestamp
  estimatedDelivery?: string
  trackingNumber?: string
  shippingAddress?: {
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

export const createOrder = async (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const order = {
      ...orderData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }
    
    const docRef = await addDoc(collection(db, 'orders'), order)
    return { id: docRef.id, ...order }
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export const getOrdersByEmail = async (email: string) => {
  try {
    const q = query(
      collection(db, 'orders'),
      where('customerEmail', '==', email),
      orderBy('createdAt', 'desc')
    )
    
    const querySnapshot = await getDocs(q)
    const orders: Order[] = []
    
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() } as Order)
    })
    
    return orders
  } catch (error) {
    console.error('Error fetching orders:', error)
    throw error
  }
}

export const getOrderById = async (orderId: string) => {
  try {
    const q = query(
      collection(db, 'orders'),
      where('stripeSessionId', '==', orderId)
    )
    
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      return { id: doc.id, ...doc.data() } as Order
    }
    
    return null
  } catch (error) {
    console.error('Error fetching order:', error)
    throw error
  }
}

export const updateOrderStatus = async (orderId: string, status: Order['status']) => {
  try {
    const orderRef = doc(db, 'orders', orderId)
    await updateDoc(orderRef, {
      status,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error('Error updating order status:', error)
    throw error
  }
}

export const getAllOrders = async () => {
  try {
    const q = query(
      collection(db, 'orders'),
      orderBy('createdAt', 'desc')
    )
    
    const querySnapshot = await getDocs(q)
    const orders: Order[] = []
    
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() } as Order)
    })
    
    return orders
  } catch (error) {
    console.error('Error fetching all orders:', error)
    throw error
  }
} 