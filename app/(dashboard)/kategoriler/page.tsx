'use client'

import { useState } from 'react'
import { CATEGORIES } from '@/lib/categories-data'
import ProductCard from '@/components/kategoriler/ProductCard'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const STAGGER_DELAYS = [0, 60, 120, 180, 240, 300, 360]

export default function KategorilerPage() {
  const [activeSlug, setActiveSlug] = useState(CATEGORIES[0].slug)
  const activeCategory = CATEGORIES.find((c) => c.slug === activeSlug) || CATEGORIES[0]

  return (
    <div className="flex h-[calc(100vh-0px)] overflow-hidden">
      {/* Left Panel - Category List */}
      <div className="w-[220px] flex-shrink-0 bg-[#0d0d14] border-r border-[#1e1e2e] flex flex-col">
        <div className="px-4 py-5 border-b border-[#1e1e2e]">
          <h2 className="text-xs font-semibold text-[#6b6b80] uppercase tracking-wider">ÜRETİM HATLARI</h2>
        </div>
        <nav className="flex-1 overflow-y-auto py-2">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.slug}
              onClick={() => setActiveSlug(cat.slug)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={cn(
                'w-full flex items-center justify-between px-4 py-2.5 text-sm transition-all duration-200 group animate-slide-left',
                activeSlug === cat.slug
                  ? 'bg-[#8b5cf6]/10 text-[#8b5cf6] border-r-2 border-[#8b5cf6]'
                  : 'text-[#a0a0b0] hover:text-white hover:bg-[#1e1e2e]/40'
              )}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <span
                  className={cn(
                    'text-base flex-shrink-0 transition-transform duration-200',
                    activeSlug === cat.slug ? 'scale-110' : 'group-hover:scale-110'
                  )}
                >
                  {cat.icon}
                </span>
                <span className="truncate text-left">{cat.name}</span>
              </span>
              <ChevronRight
                className={cn(
                  'w-3.5 h-3.5 flex-shrink-0 transition-all duration-200',
                  activeSlug === cat.slug
                    ? 'text-[#8b5cf6] translate-x-0.5'
                    : 'text-[#1e1e2e] group-hover:text-[#6b6b80]'
                )}
              />
            </button>
          ))}
        </nav>
      </div>

      {/* Right Panel - Products */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2 animate-slide-right">
            <span className="text-2xl">{activeCategory.icon}</span>
            <h1 className="text-xl font-bold text-white">{activeCategory.name}</h1>
          </div>
          <p className="text-xs text-[#6b6b80] mb-6 uppercase tracking-wider animate-slide-right delay-50">
            {activeCategory.products.length} SEÇENEK MEVCUT • TÜM VERİLER USD ($)
          </p>

          {/* Product Cards — key değişince re-mount olup tekrar animate eder */}
          <div key={activeSlug} className="flex flex-col gap-4">
            {activeCategory.products.map((product, idx) => (
              <div
                key={idx}
                className="animate-card-in"
                style={{ animationDelay: `${STAGGER_DELAYS[idx] ?? idx * 60}ms` }}
              >
                <ProductCard product={product} categoryIcon={activeCategory.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
