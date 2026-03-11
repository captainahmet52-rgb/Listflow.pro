'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  hideTitle?: boolean
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
}

export default function Modal({ isOpen, onClose, title, children, size = 'md', hideTitle }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          'relative w-full bg-[#12121a] border border-[#1e1e2e] rounded-2xl shadow-2xl',
          'max-h-[90vh] overflow-y-auto',
          sizeStyles[size]
        )}
      >
        {/* Header */}
        {!hideTitle && (
          <div className="flex items-center justify-between p-6 border-b border-[#1e1e2e]">
            {title && <h2 className="text-lg font-semibold text-white">{title}</h2>}
            <button
              onClick={onClose}
              className="ml-auto text-[#6b6b80] hover:text-white transition-colors p-1 rounded-md hover:bg-[#1e1e2e]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={cn(!hideTitle && 'p-6', hideTitle && 'p-6')}>
          {children}
        </div>
      </div>
    </div>
  )

  if (typeof window === 'undefined') return null
  return createPortal(modal, document.body)
}
