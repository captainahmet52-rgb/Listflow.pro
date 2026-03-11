'use client'

import { useState } from 'react'
import { Plus, MessageCircle, Package } from 'lucide-react'
import StoreCard from '@/components/etsy/StoreCard'
import AddStoreModal from '@/components/etsy/AddStoreModal'
import Button from '@/components/ui/Button'

type StoreEntry = {
  name: string
  category: string
  subCategory: string
  plan: 'STARTER' | 'PRO' | 'TURBO'
  status: 'active' | 'inactive' | 'pending'
  orderCount: number
}

const INITIAL_STORES: StoreEntry[] = []

export default function EtsyOtomasyonPage() {
  const [stores, setStores] = useState(INITIAL_STORES)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleAddStore(newStore: { name: string; category: string; sub_category: string; currency: string }) {
    setStores((prev) => [
      ...prev,
      {
        name: newStore.name,
        category: newStore.category.toUpperCase(),
        subCategory: newStore.sub_category.toUpperCase(),
        plan: 'STARTER' as const,
        status: 'pending' as const,
        orderCount: 0,
      },
    ])
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider border border-[#1e1e2e] px-2 py-0.5 rounded-md">
              ETSY OTOMASYON
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Mağaza Yönetimi</h1>
          <p className="text-sm text-[#a0a0b0]">
            Mağazalarınızı ekleyin, ödemenizi yapın, biz sizi arayalım.
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          className="flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          YENİ MAĞAZA EKLE
        </Button>
      </div>

      {/* Info Row */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2 bg-[#12121a] border border-[#1e1e2e] rounded-lg px-4 py-2.5">
          <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-xs text-[#6b6b80]">DESTEK:</span>
          <span className="text-xs font-medium text-[#10b981]">7/24 Aktif</span>
          <button className="text-xs text-[#06b6d4] hover:underline ml-1">CANLI SOHBETİ AÇ</button>
        </div>
        <div className="flex items-center gap-2 bg-[#12121a] border border-[#1e1e2e] rounded-lg px-4 py-2.5">
          <Package className="w-3.5 h-3.5 text-[#6b6b80]" />
          <span className="text-xs text-[#6b6b80]">SİPARİŞLER:</span>
          <span className="text-xs font-medium text-white">0</span>
          <span className="text-xs text-[#6b6b80]">Toplam Gönderi</span>
        </div>
      </div>

      {/* Store Grid */}
      <div>
        <h2 className="text-sm font-semibold text-[#a0a0b0] uppercase tracking-wider mb-4">MAĞAZALARIM</h2>
        {stores.length === 0 ? (
          <div className="border-2 border-dashed border-[#1e1e2e] rounded-xl py-16 px-6 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#1e1e2e] flex items-center justify-center mb-4">
              <Package className="w-7 h-7 text-[#6b6b80]" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">Henüz mağaza eklenmedi.</h3>
            <p className="text-sm text-[#6b6b80] max-w-sm mb-6">
              İlk mağazanı ekle, ödemenizi yapın, uzman ekibimiz otomasyonu devreye alsın.
            </p>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4" />
              İlk Mağazanı Ekle
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stores.map((store) => (
              <StoreCard key={store.name} {...store} />
            ))}
          </div>
        )}
      </div>

      <AddStoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleAddStore}
      />
    </div>
  )
}
