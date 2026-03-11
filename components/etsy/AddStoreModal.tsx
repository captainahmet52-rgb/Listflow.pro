'use client'

import { useState } from 'react'
import { ShoppingBag, Info } from 'lucide-react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { CATEGORIES } from '@/lib/categories-data'

interface AddStoreModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: (store: { name: string; category: string; sub_category: string; currency: string }) => void
}

const SUB_CATEGORY_MAP: Record<string, string[]> = {
  'tig-isi': ['Anahtarlık', 'Amigurumi', 'Dönence', 'Kapı Süsü', 'Çiçek Buketi'],
  'punch-needle': ['4\'lü Bardak Altlığı', 'Punch Tablo', '4\'lü Anahtarlık', 'Mousepad Set'],
  '3d-baski': ['Anahtarlık', 'Figür', '3D Tablo', '3D Kalemlik'],
  'pod': ['Tişört', 'Canvas Tablo', 'Pin/Rozet'],
  'gumus-taki': ['Kolye', 'Yüzük', 'Bilezik'],
  'cam-baski': ['Cam Saat', 'Cam Tablo', 'Cam Kesme Tahtası'],
  'metal-kesim': ['Masa Saati', 'Metal Tablo'],
  'ahsap-kesim': ['Bardak Altlığı', 'Ahşap Tablo'],
  'aliexpress': ['Genel'],
  'telegram': ['Genel'],
  'epoxy': ['Anahtarlık'],
}

export default function AddStoreModal({ isOpen, onClose, onSuccess }: AddStoreModalProps) {
  const [storeName, setStoreName] = useState('')
  const [phone, setPhone] = useState('')
  const [categorySlug, setCategorySlug] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [currency, setCurrency] = useState<'USD' | 'TRY'>('USD')
  const [loading, setLoading] = useState(false)

  const subCategories = categorySlug ? ['Listflow karar versin', ...(SUB_CATEGORY_MAP[categorySlug] || [])] : []

  function handleClose() {
    setStoreName('')
    setPhone('')
    setCategorySlug('')
    setSubCategory('')
    setCurrency('USD')
    onClose()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!storeName.trim() || !categorySlug) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))

    const category = CATEGORIES.find((c) => c.slug === categorySlug)
    onSuccess?.({
      name: storeName,
      category: category?.name || categorySlug,
      sub_category: subCategory || 'Listflow karar versin',
      currency,
    })
    setLoading(false)
    handleClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md" hideTitle>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 pb-4 border-b border-[#1e1e2e]">
          <div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-[#8b5cf6]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Mağaza Kaydı</h2>
            <p className="text-xs text-[#6b6b80] mt-0.5">Kaydı tamamlayın, uzman ekibimiz sizi arasın.</p>
          </div>
        </div>

        {/* Store Name */}
        <Input
          label="MAĞAZA ADI"
          type="text"
          placeholder="Örn: WoodDesignTR"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />

        {/* Phone */}
        <Input
          label="TELEFON NO (OPSİYONEL)"
          type="tel"
          placeholder="+90 5xx xxx xx xx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#a0a0b0] uppercase tracking-wider">ANA KATEGORİ</label>
          <select
            value={categorySlug}
            onChange={(e) => { setCategorySlug(e.target.value); setSubCategory('') }}
            required
            className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8b5cf6] transition-all duration-200"
          >
            <option value="" className="text-[#6b6b80]">Kategori seçin...</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.slug}>{cat.icon} {cat.name}</option>
            ))}
          </select>
        </div>

        {/* Sub Category */}
        {categorySlug && (
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#a0a0b0] uppercase tracking-wider">ALT KATEGORİ</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8b5cf6] transition-all duration-200"
            >
              {subCategories.map((sc) => (
                <option key={sc} value={sc}>{sc}</option>
              ))}
            </select>
            {subCategory === 'Listflow karar versin' || !subCategory ? (
              <p className="text-xs text-[#06b6d4] flex items-center gap-1">
                <Info className="w-3 h-3" />
                Listflow seçimi: En karlı alt kategori otomatik belirlenir
              </p>
            ) : null}
          </div>
        )}

        {/* Currency Toggle */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-[#a0a0b0] uppercase tracking-wider">MAĞAZA PARA BİRİMİ</label>
          <div className="flex rounded-lg border border-[#1e1e2e] overflow-hidden">
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`flex-1 py-2.5 text-sm font-medium transition-all duration-150 ${
                currency === 'USD'
                  ? 'bg-[#8b5cf6] text-white'
                  : 'bg-[#0a0a0f] text-[#6b6b80] hover:text-white'
              }`}
            >
              $ DOLAR
            </button>
            <button
              type="button"
              onClick={() => setCurrency('TRY')}
              className={`flex-1 py-2.5 text-sm font-medium transition-all duration-150 border-l border-[#1e1e2e] ${
                currency === 'TRY'
                  ? 'bg-[#8b5cf6] text-white'
                  : 'bg-[#0a0a0f] text-[#6b6b80] hover:text-white'
              }`}
            >
              ₺ TÜRK LİRASI
            </button>
          </div>
          <p className="text-xs text-[#6b6b80]">Varsayılan para birimi dolardır.</p>
        </div>

        {/* Info Note */}
        <div className="bg-[#8b5cf6]/5 border border-[#8b5cf6]/20 rounded-lg p-3 flex gap-2">
          <Info className="w-4 h-4 text-[#8b5cf6] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#a0a0b0] leading-relaxed">
            Ödeme yapıldıktan sonra sistemimiz sizi bilgilendirecek ve ekibimiz mağazanız için otomasyonu devreye alacak.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2 border-t border-[#1e1e2e]">
          <Button type="button" variant="secondary" className="flex-1" onClick={handleClose}>
            VAZGEÇ
          </Button>
          <Button type="submit" variant="primary" className="flex-1" loading={loading}>
            MAĞAZAYI EKLE
          </Button>
        </div>
      </form>
    </Modal>
  )
}
