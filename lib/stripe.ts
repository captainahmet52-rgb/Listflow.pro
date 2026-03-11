import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
})

// Client-side Stripe promise (singleton)
let stripePromise: ReturnType<typeof loadStripe>
export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// Plan fiyat ID'leri — Stripe dashboard'dan ürün oluşturduktan sonra buraya ekle
export const PLAN_PRICE_IDS = {
  STARTER: process.env.STRIPE_PRICE_STARTER ?? '',
  PRO: process.env.STRIPE_PRICE_PRO ?? '',
  TURBO: process.env.STRIPE_PRICE_TURBO ?? '',
}
