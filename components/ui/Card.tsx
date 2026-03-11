import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlighted' | 'glass'
}

export default function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border transition-all duration-200',
        {
          'bg-[#12121a] border-[#1e1e2e]': variant === 'default',
          'bg-[#12121a] border-[#8b5cf6]/50 shadow-[0_0_20px_rgba(139,92,246,0.08)]': variant === 'highlighted',
          'bg-[#12121a]/80 backdrop-blur-sm border-[#1e1e2e]': variant === 'glass',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
