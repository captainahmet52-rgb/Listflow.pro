import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  iconColor?: string
  accentColor?: string
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = 'text-[#8b5cf6]',
  accentColor = 'bg-[#8b5cf6]/10',
}: StatsCardProps) {
  return (
    <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider">{title}</span>
        <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', accentColor)}>
          <Icon className={cn('w-4 h-4', iconColor)} />
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        {subtitle && <div className="text-xs text-[#6b6b80] mt-1">{subtitle}</div>}
      </div>
    </div>
  )
}
