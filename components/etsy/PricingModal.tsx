'use client'

import { useState } from 'react'
import { Check, Zap, Star, Rocket, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import Modal from '@/components/ui/Modal'
import { PLANS_CONFIG, type PlanId } from '@/lib/plans-config'

interface PricingModalProps {
  isOpen: boolean
  onClose: () => void
  storeName: string
  onSelectPlan?: (plan: PlanId) => void
}

const PLAN_STYLE = {
  STARTER: {
    icon: Zap,
    iconColor: 'text-[#6b6b80]',
    iconBg: 'bg-[#1e1e2e]',
    borderColor: 'border-[#1e1e2e]',
    hoverBorder: 'hover:border-[#6b6b80]/50',
    badgeColor: '',
    btnClass: 'bg-[#1e1e2e] border-[#2e2e3e] text-[#a0a0b0] hover:bg-[#2e2e3e]',
  },
  PRO: {
    icon: Star,
    iconColor: 'text-[#8b5cf6]',
    iconBg: 'bg-[#8b5cf6]/10',
    borderColor: 'border-[#8b5cf6]/50',
    hoverBorder: 'hover:border-[#8b5cf6]',
    badgeColor: 'bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/30',
    btnClass: 'bg-[#8b5cf6]/10 border-[#8b5cf6]/50 text-[#8b5cf6] hover:bg-[#8b5cf6]/20',
  },
  TURBO: {
    icon: Rocket,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#06b6d4]/10',
    borderColor: 'border-[#06b6d4]/50',
    hoverBorder: 'hover:border-[#06b6d4]',
    badgeColor: 'bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30',
    btnClass: 'bg-[#06b6d4]/10 border-[#06b6d4]/50 text-[#06b6d4] hover:bg-[#06b6d4]/20',
  },
}

export default function PricingModal({ isOpen, onClose, storeName, onSelectPlan }: PricingModalProps) {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)

  async function handleSelectPlan(plan: PlanId) {
    setLoadingPlan(plan)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, storeName }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        toast.error(data.error ?? 'Bir hata oluştu.')
        setLoadingPlan(null)
      }
    } catch {
      toast.error('Bağlantı hatası. Lütfen tekrar dene.')
      setLoadingPlan(null)
    }
    onSelectPlan?.(plan)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Plan Seç" size="lg">
      <div className="mb-4">
        <p className="text-sm text-[#a0a0b0]">
          <span className="font-semibold text-white">{storeName}</span> mağazası için bir plan seçin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PLANS_CONFIG.map((plan) => {
          const style = PLAN_STYLE[plan.id]
          const Icon = style.icon
          return (
            <div
              key={plan.id}
              className={`relative flex flex-col border rounded-xl p-5 transition-all duration-200 ${style.borderColor} ${style.hoverBorder} bg-[#0a0a0f]`}
            >
              {plan.badge && (
                <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${style.badgeColor}`}>
                  {plan.badge}
                </span>
              )}

              <div className={`w-10 h-10 rounded-xl ${style.iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${style.iconColor}`} />
              </div>

              <div className="mb-1 text-sm font-bold text-white">{plan.name}</div>
              <div className="flex items-baseline gap-0.5 mb-4">
                <span className="text-2xl font-bold text-white">{plan.price}</span>
                <span className="text-xs text-[#6b6b80]">{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-[#a0a0b0]">
                    <Check className="w-3.5 h-3.5 text-[#10b981] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan.id)}
                disabled={loadingPlan !== null}
                className={`w-full py-2 rounded-lg text-xs font-bold transition-all duration-150 border flex items-center justify-center gap-1.5 disabled:opacity-60 disabled:cursor-not-allowed ${style.btnClass}`}
              >
                {loadingPlan === plan.id && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {loadingPlan === plan.id ? 'YÖNLENDİRİLİYOR...' : `${plan.name} SEÇ`}
              </button>
            </div>
          )
        })}
      </div>

      <p className="text-center text-xs text-[#6b6b80] mt-4">
        Ödeme sonrası ekibimiz sizi en geç 24 saat içinde arar ve otomasyonu kurar.
      </p>
    </Modal>
  )
}
