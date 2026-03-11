import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'cyan'
  | 'turbo'
  | 'muted'
  | 'outline'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[#1e1e2e] text-[#a0a0b0] border border-[#2e2e4e]',
  success: 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20',
  warning: 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20',
  danger: 'bg-red-400/10 text-red-400 border border-red-400/20',
  purple: 'bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20',
  cyan: 'bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20',
  turbo: 'bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white border-0',
  muted: 'bg-[#0d0d14] text-[#6b6b80] border border-[#1e1e2e]',
  outline: 'bg-transparent text-[#a0a0b0] border border-[#1e1e2e]',
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
