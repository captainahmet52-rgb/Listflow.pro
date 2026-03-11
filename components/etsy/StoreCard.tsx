'use client'

import { useState } from 'react'
import { ShoppingBag, Package, X } from 'lucide-react'
import { toast } from 'sonner'
import Badge from '@/components/ui/Badge'
import PricingModal from '@/components/etsy/PricingModal'

interface StoreCardProps {
  name: string
  category: string
  subCategory: string
  plan: 'STARTER' | 'PRO' | 'TURBO'
  status: 'active' | 'inactive' | 'pending'
  orderCount: number
  onRemove?: () => void
}

const planConfig = {
  STARTER: { variant: 'muted' as const, label: 'STARTER' },
  PRO: { variant: 'purple' as const, label: 'PRO' },
  TURBO: { variant: 'turbo' as const, label: 'TURBO' },
}

const statusConfig = {
  active: { variant: 'success' as const, label: 'AKTİF' },
  inactive: { variant: 'danger' as const, label: 'PASİF' },
  pending: { variant: 'warning' as const, label: 'BEKLİYOR' },
}

export default function StoreCard({ name, category, subCategory, plan, status, orderCount, onRemove }: StoreCardProps) {
  const [isPricingOpen, setIsPricingOpen] = useState(false)

  function handleSelectPlan(selectedPlan: 'STARTER' | 'PRO' | 'TURBO') {
    setIsPricingOpen(false)
    toast.success(`${selectedPlan} planı seçildi! Ödeme sayfasına yönlendiriliyorsunuz...`)
  }

  return (
    <>
      <div className="relative bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5 flex flex-col gap-4 hover:border-[#8b5cf6]/30 transition-all duration-200">
        {/* Remove button */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#1e1e2e] hover:bg-red-500/20 flex items-center justify-center text-[#6b6b80] hover:text-red-400 transition-all"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Header */}
        <div className="flex items-start justify-between pr-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-[#8b5cf6]" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{name}</div>
              <div className="text-xs text-[#6b6b80]">{category}</div>
            </div>
          </div>
          <Badge variant={planConfig[plan].variant}>{planConfig[plan].label}</Badge>
        </div>

        {/* Orders */}
        <div className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-3">
          <div className="text-xs text-[#6b6b80] uppercase tracking-wider mb-1">SİPARİŞLER</div>
          <div className="text-2xl font-bold text-white">{orderCount}</div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-[#1e1e2e]" />
          <span className="text-[10px] text-[#6b6b80] uppercase tracking-wider flex items-center gap-1">
            <Package className="w-3 h-3" />
            SENİN ÜRÜNÜN
          </span>
          <div className="flex-1 h-px bg-[#1e1e2e]" />
        </div>

        {/* Bottom action */}
        {status === 'pending' ? (
          <button
            onClick={() => setIsPricingOpen(true)}
            className="w-full py-2.5 rounded-lg text-sm font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white hover:opacity-90 transition-opacity"
          >
            AKTİVE ET (ÖDE)
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#6b6b80]">Bağlantı durumu</span>
            <Badge variant={statusConfig[status].variant}>
              <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
              {statusConfig[status].label}
            </Badge>
          </div>
        )}
      </div>

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        storeName={name}
        onSelectPlan={handleSelectPlan}
      />
    </>
  )
}
