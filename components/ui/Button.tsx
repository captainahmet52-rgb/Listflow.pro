'use client'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gradient' | 'secondary' | 'ghost' | 'danger' | 'cyan'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const variantStyles = {
  primary: 'bg-[#8b5cf6] hover:bg-[#7c3aed] text-white border border-[#8b5cf6]',
  gradient: 'bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 text-white border-0',
  cyan: 'bg-[#06b6d4] hover:bg-[#0891b2] text-white border border-[#06b6d4]',
  secondary: 'bg-transparent border border-[#1e1e2e] text-[#a0a0b0] hover:border-[#8b5cf6] hover:text-white',
  ghost: 'bg-transparent border-0 text-[#a0a0b0] hover:text-white hover:bg-[#12121a]',
  danger: 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
