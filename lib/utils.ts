import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  if (currency === 'TRY') {
    return `₺${amount.toFixed(2)}`
  }
  return `$${amount.toFixed(2)}`
}

export function formatPercent(value: number): string {
  return `%${Math.abs(value).toFixed(0)}`
}

export function getMarginColor(margin: number): string {
  if (margin >= 30) return 'text-[#10b981]'
  if (margin >= 20) return 'text-yellow-400'
  return 'text-red-400'
}

export function getMarginBgColor(margin: number): string {
  if (margin >= 30) return 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20'
  if (margin >= 20) return 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20'
  return 'bg-red-400/10 text-red-400 border-red-400/20'
}

export function calculateNetProfit(cost: number, shipping: number, etsyFee: number, salePrice: number): number {
  return salePrice - cost - shipping - etsyFee
}

export function calculateMargin(cost: number, shipping: number, etsyFee: number, salePrice: number): number {
  if (salePrice === 0) return 0
  const netProfit = calculateNetProfit(cost, shipping, etsyFee, salePrice)
  return (netProfit / salePrice) * 100
}

export function truncateEmail(email: string, maxLength = 20): string {
  if (email.length <= maxLength) return email
  const [local, domain] = email.split('@')
  if (!domain) return email.substring(0, maxLength) + '...'
  const truncatedLocal = local.substring(0, Math.max(4, maxLength - domain.length - 4))
  return `${truncatedLocal}...@${domain}`
}
