'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Zap, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'ÖZELLİKLER', href: '#ozellikler' },
  { label: 'KATALOG', href: '#nasil-calisir' },
  { label: 'FİYATLANDIRMA', href: '#fiyatlandirma' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e2e] bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">listflow.pro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#a0a0b0] hover:text-white tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-[#a0a0b0] hover:text-white border border-[#1e1e2e] hover:border-[#8b5cf6]/50 px-4 py-2 rounded-lg transition-all"
            >
              GİRİŞ YAP
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-white bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              HEMEN BAŞLA
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#a0a0b0] hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d14] border-t border-[#1e1e2e] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#a0a0b0] hover:text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#1e1e2e]">
            <Link href="/login" className="text-sm font-medium text-center text-[#a0a0b0] border border-[#1e1e2e] px-4 py-2.5 rounded-lg">
              GİRİŞ YAP
            </Link>
            <Link href="/register" className="text-sm font-medium text-center text-white bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-4 py-2.5 rounded-lg">
              HEMEN BAŞLA
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
