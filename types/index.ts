export interface User {
  id: string
  email: string
  created_at: string
  user_metadata?: {
    name?: string
  }
}

export interface Store {
  id: string
  user_id: string
  name: string
  category: string | null
  sub_category: string | null
  currency: 'USD' | 'TRY'
  plan: 'STARTER' | 'PRO' | 'TURBO'
  status: 'active' | 'inactive' | 'pending'
  order_count?: number
  created_at: string
}

export interface Product {
  id: string
  store_id: string
  name: string
  category: string | null
  cost: number
  shipping: number
  etsy_fee: number
  sale_price: number
  net_profit: number
  margin: number
  status: 'active' | 'inactive' | 'draft' | 'error'
  created_at: string
  store?: Store
}

export interface Order {
  id: string
  store_id: string
  product_id: string | null
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  created_at: string
  product?: Product
  store?: Store
}

export interface Category {
  id: string
  slug: string
  name: string
  icon: string
  products: CategoryProduct[]
}

export interface CategoryProduct {
  name: string
  cost: number
  shipping: number
  etsy_fee: number
  sale_price: number
  net_profit: number
  margin: number
  note?: string
  image?: string
}

export interface PricingPlan {
  name: 'STARTER' | 'PRO' | 'TURBO'
  subtitle: string
  features: string[]
  isPopular?: boolean
}

export interface ChecklistItem {
  id: string
  label: string
  completed: boolean
  href: string
  buttonLabel: string
}

export interface DashboardStats {
  storeCount: number
  productCount: number
  orderCount: number
  errorCount: number
}
