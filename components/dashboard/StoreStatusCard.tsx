import { Store } from '@/types'
import { cn } from '@/lib/utils'
import { ShoppingBag } from 'lucide-react'

interface StoreStatusCardProps {
  store: {
    name: string
    status: 'active' | 'inactive' | 'pending'
    category?: string | null
    order_count?: number
  }
}

export default function StoreStatusCard({ store }: StoreStatusCardProps) {
  const statusConfig = {
    active: { label: 'AKTİF', class: 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20' },
    inactive: { label: 'PASİF', class: 'bg-red-400/10 text-red-400 border-red-400/20' },
    pending: { label: 'BEKLİYOR', class: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' },
  }

  const config = statusConfig[store.status]

  return (
    <div className="flex items-center justify-between py-3 px-4 bg-[#0a0a0f] rounded-lg border border-[#1e1e2e]">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 text-[#8b5cf6]" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">{store.name}</div>
          {store.category && (
            <div className="text-xs text-[#6b6b80]">Otomasyon bağlantısı aktif</div>
          )}
        </div>
      </div>
      <span className={cn('text-xs font-medium px-2 py-0.5 rounded-md border', config.class)}>
        {config.label}
      </span>
    </div>
  )
}
