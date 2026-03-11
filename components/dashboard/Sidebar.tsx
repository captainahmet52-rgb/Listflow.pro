'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Grid3X3,
  Store,
  Pin,
  Facebook,
  ShoppingBag,
  ShoppingCart,
  ClipboardList,
  Zap,
  LogOut,
  Menu,
  X,
  Gift,
  User,
  CreditCard,
  Shield,
  ChevronUp,
  ChevronDown,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Kategoriler', href: '/kategoriler', icon: Grid3X3 },
  { label: 'Etsy Otomasyon', href: '/etsy-otomasyon', icon: Store },
  { label: 'Pinterest Otomasyon', href: '/pinterest-otomasyon', icon: Pin },
  { label: 'Meta Otomasyon', href: '/meta-otomasyon', icon: Facebook },
  { label: 'Ebay Otomasyon', href: '/ebay-otomasyon', icon: ShoppingBag },
  { label: 'Amazon Otomasyon', href: '/amazon-otomasyon', icon: ShoppingCart },
  { label: 'Siparişlerim', href: '/siparislerim', icon: ClipboardList },
]

interface SidebarProps {
  userEmail?: string
  userName?: string
}

export default function Sidebar({ userEmail, userName }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [lang, setLang] = useState<'TR' | 'EN'>('TR')

  const isActive = (href: string) => pathname === href

  function handleLogout() {
    router.push('/login')
  }

  const initials = userName
    ? userName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : userEmail
    ? userEmail[0].toUpperCase()
    : 'LF'

  const displayName = userName || userEmail || 'Kullanıcı'
  const shortName = displayName.length > 12 ? displayName.slice(0, 10) + '...' : displayName
  const shortEmail = userEmail
    ? userEmail.length > 20 ? userEmail.slice(0, 17) + '...' : userEmail
    : ''

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-[#1e1e2e]">
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-base font-bold gradient-text">listflow.pro</span>
            <div className="text-[10px] text-[#6b6b80] uppercase tracking-wider">Premium Suite</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-0.5">
        {menuItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group relative overflow-hidden',
                active
                  ? 'bg-[#8b5cf6]/10 text-[#8b5cf6] font-medium sidebar-active-glow'
                  : 'text-[#a0a0b0] hover:text-white hover:bg-[#1e1e2e]/50'
              )}
            >
              {/* Active glow accent bar */}
              {active && (
                <>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6] rounded-l-full shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/8 via-transparent to-transparent pointer-events-none" />
                </>
              )}
              {/* Hover shimmer */}
              {!active && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              )}
              <Icon className={cn(
                'w-4 h-4 flex-shrink-0 transition-all duration-200',
                active
                  ? 'text-[#8b5cf6] drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]'
                  : 'text-[#6b6b80] group-hover:text-white group-hover:scale-110'
              )} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Referral Box */}
      <div className="px-3 py-3">
        <Link href="/referral" className="block border border-[#8b5cf6]/30 rounded-xl p-3 bg-[#8b5cf6]/5 hover:bg-[#8b5cf6]/10 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Gift className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span className="text-xs font-medium text-white">Referral 🎁</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-[#6b6b80]" />
              <span className="text-[10px] text-[#6b6b80]">0/5 arkadaş</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-[#1e1e2e] rounded-full h-1 mb-2">
            <div className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] h-1 rounded-full w-0" />
          </div>
          <div className="flex gap-1.5">
            <span className="text-[10px] px-1.5 py-0.5 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-md font-medium">%20 indirim</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#06b6d4]/20 text-[#06b6d4] rounded-md font-medium">$250 nakit</span>
          </div>
        </Link>
      </div>

      {/* Profile Expandable */}
      <div className="px-3 pb-4 border-t border-[#1e1e2e]">
        {/* Expanded account controls */}
        {profileOpen && (
          <div className="pt-3 pb-2">
            <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider px-1 mb-2">Hesap Kontrolleri</div>
            <div className="space-y-0.5">
              <Link href="/profil" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#a0a0b0] hover:text-white hover:bg-[#1e1e2e]/50 transition-all">
                <User className="w-4 h-4 text-[#6b6b80]" />
                Profil Bilgileri
              </Link>
              <Link href="/abonelik" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#a0a0b0] hover:text-white hover:bg-[#1e1e2e]/50 transition-all">
                <CreditCard className="w-4 h-4 text-[#6b6b80]" />
                Abonelik
              </Link>
              <Link href="/guvenlik" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-[#a0a0b0] hover:text-white hover:bg-[#1e1e2e]/50 transition-all">
                <Shield className="w-4 h-4 text-[#6b6b80]" />
                Güvenlik
              </Link>
            </div>

            {/* Language Toggle */}
            <div className="mt-3 px-1">
              <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-2">Dil</div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLang('TR')}
                  className={cn(
                    'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all',
                    lang === 'TR'
                      ? 'bg-[#8b5cf6] text-white'
                      : 'bg-[#1e1e2e] text-[#6b6b80] hover:text-white'
                  )}
                >
                  TR
                </button>
                <button
                  onClick={() => setLang('EN')}
                  className={cn(
                    'flex-1 py-1.5 rounded-lg text-xs font-bold transition-all',
                    lang === 'EN'
                      ? 'bg-[#8b5cf6] text-white'
                      : 'bg-[#1e1e2e] text-[#6b6b80] hover:text-white'
                  )}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-all font-medium"
            >
              <LogOut className="w-4 h-4" />
              Çıkış Yap
            </button>
          </div>
        )}

        {/* User row — always visible */}
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-[#1e1e2e]/50 transition-all mt-1"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-white">{initials}</span>
          </div>
          <div className="flex-1 min-w-0 text-left">
            <div className="text-sm font-medium text-white truncate">{shortName}</div>
            <div className="text-xs text-[#6b6b80] truncate">{shortEmail}</div>
          </div>
          {profileOpen ? (
            <ChevronUp className="w-4 h-4 text-[#6b6b80] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#6b6b80] flex-shrink-0" />
          )}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#12121a] border border-[#1e1e2e] rounded-lg text-[#a0a0b0] hover:text-white"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-[240px] min-h-screen bg-[#0d0d14] border-r border-[#1e1e2e] flex-col fixed left-0 top-0 bottom-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          'lg:hidden fixed left-0 top-0 bottom-0 w-[240px] bg-[#0d0d14] border-r border-[#1e1e2e] z-40 flex flex-col transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="pt-14">
          <SidebarContent />
        </div>
      </aside>
    </>
  )
}
