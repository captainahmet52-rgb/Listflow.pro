import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChecklistItemProps {
  label: string
  completed: boolean
  href: string
  buttonLabel: string
  isLast?: boolean
}

export default function ChecklistItem({ label, completed, href, buttonLabel, isLast }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 relative">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-4 top-8 w-px h-full bg-[#1e1e2e]" style={{ height: 'calc(100% - 8px)' }} />
      )}

      {/* Check Circle */}
      <div className={cn(
        'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10',
        completed
          ? 'bg-[#10b981] border-[#10b981]'
          : 'bg-[#12121a] border-[#1e1e2e]'
      )}>
        {completed ? (
          <Check className="w-4 h-4 text-white" />
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#6b6b80]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-between pb-4 min-w-0">
        <span className={cn(
          'text-sm font-medium',
          completed ? 'text-[#6b6b80] line-through' : 'text-white'
        )}>
          {label}
        </span>
        <Link
          href={href}
          className="ml-3 flex-shrink-0 text-xs font-medium text-[#8b5cf6] hover:text-[#a78bfa] border border-[#8b5cf6]/30 hover:border-[#8b5cf6]/60 px-2.5 py-1 rounded-md transition-all duration-150 whitespace-nowrap"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  )
}
