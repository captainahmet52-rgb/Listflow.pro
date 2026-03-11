import Link from 'next/link'
import { Zap } from 'lucide-react'

const LOGOS = ['ETSY LABS', 'PİXEL WAREHOUSE', 'NORTH ATLAS', 'STUDIO NOMAD', 'FLOW COMMERCE']

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] bg-[#0d0d14] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Partner Logos */}
        <div className="text-center mb-10">
          <p className="text-xs text-[#6b6b80] uppercase tracking-widest mb-6">
            Büyüme odaklı mağazalar listflow ile çalışıyor
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-xs font-bold text-[#2e2e4e] uppercase tracking-widest">
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-[#1e1e2e] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold gradient-text">listflow.pro</span>
          </Link>

          <p className="text-xs text-[#6b6b80]">
            © 2025 listflow.pro — Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-xs text-[#6b6b80] hover:text-white transition-colors">
              Giriş Yap
            </Link>
            <Link href="/register" className="text-xs text-[#6b6b80] hover:text-white transition-colors">
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
