'use client'

import { CategoryProduct } from '@/types'
import { getMarginBgColor, formatPercent } from '@/lib/utils'
import { BookOpen, AlertCircle } from 'lucide-react'

interface ProductCardProps {
  product: CategoryProduct
  categoryIcon?: string
}

export default function ProductCard({ product }: ProductCardProps) {
  if (product.note) {
    return (
      <div className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <AlertCircle className="w-4 h-4 text-[#06b6d4]" />
          </div>
          <div>
            <div className="text-sm font-medium text-white mb-1">{product.name}</div>
            <p className="text-xs text-[#a0a0b0] leading-relaxed">{product.note}</p>
          </div>
        </div>
      </div>
    )
  }

  const marginClass = getMarginBgColor(product.margin)

  return (
    <div className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl overflow-hidden hover:border-[#8b5cf6]/30 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e1e2e]">
        <div className="text-sm font-semibold text-white">{product.name}</div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${marginClass}`}>
          {product.margin < 0 ? '-' : ''}{formatPercent(product.margin)} MARJ
        </span>
      </div>

      {/* Price Grid */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div>
            <div className="text-[10px] text-[#6b6b80] uppercase tracking-wider mb-1">MALİYET</div>
            <div className="text-sm font-semibold text-white">${product.cost}</div>
          </div>
          <div>
            <div className="text-[10px] text-[#6b6b80] uppercase tracking-wider mb-1">KARGO</div>
            <div className="text-sm font-semibold text-white">${product.shipping}</div>
          </div>
          <div>
            <div className="text-[10px] text-[#6b6b80] uppercase tracking-wider mb-1">ETSY (%24)</div>
            <div className="text-sm font-semibold text-red-400">-${product.etsy_fee.toFixed(1)}</div>
          </div>
          <div>
            <div className="text-[10px] text-[#6b6b80] uppercase tracking-wider mb-1">SATIŞ FİYATI</div>
            <div className="text-sm font-semibold text-white">${product.sale_price}</div>
          </div>
        </div>

        {/* Net Profit + CTA */}
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 bg-[#12121a] rounded-lg px-4 py-2.5 border border-[#1e1e2e]">
            <div>
              <div className="text-[10px] text-[#6b6b80] uppercase tracking-wider">NET KÂR</div>
              <div className={`text-base font-bold ${product.net_profit < 0 ? 'text-red-400' : 'text-[#10b981]'}`}>
                {product.net_profit < 0 ? '-' : ''}${Math.abs(product.net_profit).toFixed(1)}
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#06b6d4]/10 hover:bg-[#06b6d4]/20 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap">
            <BookOpen className="w-3.5 h-3.5" />
            KATALOĞU GÖR
          </button>
        </div>
      </div>
    </div>
  )
}
