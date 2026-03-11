'use client'

import { useState, useMemo } from 'react'
import { Search, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { CATEGORIES } from '@/lib/categories-data'
import { getMarginBgColor, formatPercent } from '@/lib/utils'
import { cn } from '@/lib/utils'

// Flatten all products from categories
const ALL_PRODUCTS = CATEGORIES.flatMap((cat) =>
  cat.products
    .filter((p) => p.sale_price > 0)
    .map((p, idx) => ({
      id: `${cat.slug}-${idx}`,
      name: p.name,
      category: cat.name,
      cost: p.cost,
      shipping: p.shipping,
      etsy_fee: p.etsy_fee,
      sale_price: p.sale_price,
      net_profit: p.net_profit,
      margin: p.margin,
      status: p.margin < 0 ? 'error' : 'active',
    }))
)

const PAGE_SIZE = 12

type StatusFilter = 'all' | 'active' | 'error'

export default function UrunlerPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'all' || p.status === statusFilter
      return matchSearch && matchStatus
    })
  }, [search, statusFilter])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const activeCount = ALL_PRODUCTS.filter(p => p.status === 'active').length
  const errorCount = ALL_PRODUCTS.filter(p => p.status === 'error').length
  const avgMargin = ALL_PRODUCTS.reduce((sum, p) => sum + p.margin, 0) / ALL_PRODUCTS.length

  function handleSearch(value: string) {
    setSearch(value)
    setPage(1)
  }

  function handleStatusFilter(f: StatusFilter) {
    setStatusFilter(f)
    setPage(1)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider border border-[#1e1e2e] px-2 py-0.5 rounded-md">
            ÜRÜN YÖNETİMİ
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">Ürünler</h1>
        <p className="text-sm text-[#a0a0b0]">Tüm ürünlerinizi görüntüleyin ve yönetin.</p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Toplam', value: ALL_PRODUCTS.length, color: 'text-white' },
          { label: 'Aktif', value: activeCount, color: 'text-[#10b981]' },
          { label: 'Hatalı', value: errorCount, color: 'text-red-400' },
          { label: 'Ort. Marj', value: `${formatPercent(avgMargin)}`, color: 'text-[#06b6d4]' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#12121a] border border-[#1e1e2e] rounded-lg px-4 py-3">
            <div className="text-xs text-[#6b6b80] uppercase tracking-wider mb-1">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b80]" />
          <input
            type="text"
            placeholder="Ürün veya kategori ara..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-[#12121a] border border-[#1e1e2e] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-[#6b6b80] focus:outline-none focus:border-[#8b5cf6] transition-all"
          />
        </div>
        <div className="flex rounded-lg border border-[#1e1e2e] overflow-hidden">
          {(['all', 'active', 'error'] as StatusFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => handleStatusFilter(f)}
              className={cn(
                'px-4 py-2.5 text-xs font-medium transition-all border-r border-[#1e1e2e] last:border-r-0',
                statusFilter === f
                  ? 'bg-[#8b5cf6] text-white'
                  : 'bg-[#12121a] text-[#6b6b80] hover:text-white'
              )}
            >
              {f === 'all' ? 'Tümü' : f === 'active' ? 'Aktif' : 'Hatalı'}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[#1e1e2e]">
                {['ÜRÜN ADI', 'KATEGORİ', 'MALİYET', 'KARGO', 'ETSY ÜCRETİ', 'SATIŞ FİYATI', 'NET KÂR', 'MARJ', 'DURUM'].map((col) => (
                  <th key={col} className="px-4 py-3 text-left text-xs font-medium text-[#6b6b80] uppercase tracking-wider">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-12 text-center text-[#6b6b80] text-sm">
                    Ürün bulunamadı.
                  </td>
                </tr>
              ) : (
                paginated.map((product) => (
                  <tr key={product.id} className="border-b border-[#1e1e2e] hover:bg-[#1e1e2e]/30 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-white">{product.name}</td>
                    <td className="px-4 py-3 text-xs text-[#a0a0b0]">{product.category}</td>
                    <td className="px-4 py-3 text-sm text-white">${product.cost}</td>
                    <td className="px-4 py-3 text-sm text-white">${product.shipping}</td>
                    <td className="px-4 py-3 text-sm text-red-400">-${product.etsy_fee.toFixed(1)}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-white">${product.sale_price}</td>
                    <td className={`px-4 py-3 text-sm font-semibold ${product.net_profit < 0 ? 'text-red-400' : 'text-[#10b981]'}`}>
                      {product.net_profit < 0 ? '-' : ''}${Math.abs(product.net_profit).toFixed(1)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${getMarginBgColor(product.margin)}`}>
                          {formatPercent(product.margin)}
                        </span>
                        <div className="w-16 h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${product.margin >= 30 ? 'bg-[#10b981]' : product.margin >= 20 ? 'bg-yellow-400' : 'bg-red-400'}`}
                            style={{ width: `${Math.max(0, Math.min(100, Math.abs(product.margin)))}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={product.status === 'active' ? 'success' : 'danger'}>
                        {product.status === 'active' ? 'AKTİF' : 'HATALI'}
                      </Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#1e1e2e]">
            <span className="text-xs text-[#6b6b80]">
              {filtered.length} üründen {(page - 1) * PAGE_SIZE + 1}-{Math.min(page * PAGE_SIZE, filtered.length)} gösteriliyor
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-md border border-[#1e1e2e] text-[#6b6b80] hover:text-white hover:border-[#8b5cf6] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-white px-2">{page} / {totalPages}</span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-md border border-[#1e1e2e] text-[#6b6b80] hover:text-white hover:border-[#8b5cf6] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
