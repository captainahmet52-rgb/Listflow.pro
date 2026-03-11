'use client'

import { useState } from 'react'
import { Search, Filter, Package, Plus } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SiparislerimPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider border border-[#1e1e2e] px-2 py-0.5 rounded-md">
              SİPARİŞLER
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Siparişlerim</h1>
          <p className="text-sm text-[#a0a0b0]">Siparişlerinizi takip edin ve yönetin.</p>
        </div>
        <Button variant="primary" className="flex-shrink-0">
          <Plus className="w-4 h-4" />
          Sipariş Gönder
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b80]" />
          <input
            type="text"
            placeholder="Sipariş ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#12121a] border border-[#1e1e2e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-[#6b6b80] focus:outline-none focus:border-[#8b5cf6] transition-all"
          />
        </div>
        <Button variant="secondary" className="flex-shrink-0">
          <Filter className="w-4 h-4" />
          FİLTRELE
        </Button>
      </div>

      {/* Empty State */}
      <div className="border-2 border-dashed border-[#1e1e2e] rounded-xl py-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#1e1e2e] flex items-center justify-center mb-4">
          <Package className="w-8 h-8 text-[#6b6b80]" />
        </div>
        <h3 className="text-base font-semibold text-white mb-2">Henüz siparişiniz bulunmuyor.</h3>
        <p className="text-sm text-[#6b6b80] max-w-sm mb-6">
          Mağazalarınıza gelen siparişler burada görünecek. Otomasyonu başlatmak için mağazanıza ürün ekleyin.
        </p>
        <Button variant="gradient" size="sm">
          Etsy Otomasyona Git
        </Button>
      </div>
    </div>
  )
}
