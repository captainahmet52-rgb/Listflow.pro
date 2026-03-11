import Link from 'next/link'
import { Check, Zap, Star, Rocket } from 'lucide-react'
import { PLANS_CONFIG } from '@/lib/plans-config'

const PLAN_META = {
  STARTER: {
    icon: Zap,
    iconColor: 'text-[#6b6b80]',
    iconBg: 'bg-[#1e1e2e]',
    subtitle: '12 Saatte Bir Otomatik Ürün Yükleme',
    cta: 'BAŞLA',
    extraFeatures: [
      '1 Etsy Mağazası',
      '12 saatte bir ürün yükleme',
      'Temel kategori erişimi',
      '50 ürüne kadar katalog',
      'E-posta desteği',
      'Mağaza kurulum rehberi',
    ],
  },
  PRO: {
    icon: Star,
    iconColor: 'text-[#8b5cf6]',
    iconBg: 'bg-[#8b5cf6]/10',
    subtitle: '6 Saatte Bir Yükleme + Birebir Kurulum',
    cta: "PRO'YA GEÇ",
    extraFeatures: [
      '3 Etsy Mağazası',
      '6 saatte bir ürün yükleme',
      'Tüm kategorilere erişim',
      '200 ürüne kadar katalog',
      'Öncelikli destek',
      'Birebir kurulum',
      'AI trend radarı',
      'Çoklu mağaza yönetimi',
    ],
  },
  TURBO: {
    icon: Rocket,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#06b6d4]/10',
    subtitle: '4 Saatte Bir Yükleme - Hızlı Sonuç',
    cta: 'TURBO BAŞLAT',
    extraFeatures: [
      'Sınırsız Etsy Mağazası',
      '4 saatte bir ürün yükleme',
      'Tüm kategoriler + özel niş',
      'Sınırsız ürün kataloğu',
      '7/24 öncelikli destek',
      'Özel hesap yöneticisi',
      'Pinterest otomasyon (beta)',
      'API erişimi',
    ],
  },
}

export default function Pricing() {
  return (
    <section id="fiyatlandirma" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8b5cf6]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-wider">Fiyatlandırma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Büyüme hızına göre{' '}
            <span className="gradient-text">planını seç</span>
          </h2>
          <p className="text-[#a0a0b0] text-lg max-w-xl mx-auto">
            Tüm planlar 7/24 otomasyon ve tedarikçi ağına erişim içerir.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS_CONFIG.map((plan) => {
            const meta = PLAN_META[plan.id]
            const Icon = meta.icon
            const isPopular = plan.id === 'PRO'
            const isTurbo = plan.id === 'TURBO'

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  isPopular
                    ? 'gradient-border-card shadow-2xl shadow-[#8b5cf6]/20 scale-[1.02]'
                    : isTurbo
                    ? 'bg-[#12121a] border border-[#06b6d4]/20 hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#06b6d4]/10'
                    : 'bg-[#12121a] border border-[#1e1e2e] hover:border-[#8b5cf6]/30'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-[#8b5cf6]/30">
                      ✦ EN POPÜLER
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6 pt-2">
                  <div className={`w-11 h-11 rounded-xl ${meta.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${meta.iconColor}`} />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{plan.name}</div>
                  <div className="text-xs text-[#6b6b80] leading-relaxed">{meta.subtitle}</div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[#1e1e2e]">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${isPopular ? 'gradient-text' : 'text-white'}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#6b6b80]">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-3 mb-8">
                  {meta.extraFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#10b981]" />
                      </div>
                      <span className="text-sm text-[#a0a0b0]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/register"
                  className={`w-full py-3.5 rounded-xl text-sm font-bold text-center transition-all duration-200 ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white hover:opacity-90 shadow-lg shadow-[#8b5cf6]/25'
                      : isTurbo
                      ? 'bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] hover:bg-[#06b6d4]/20'
                      : 'bg-[#1e1e2e] text-[#a0a0b0] hover:text-white hover:bg-[#2e2e4e] border border-[#1e1e2e]'
                  }`}
                >
                  {meta.cta}
                </Link>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-[#6b6b80] mt-8">
          Ödeme sonrası ekibimiz sizi 24 saat içinde arar ve otomasyonu devreye alır.
        </p>
      </div>
    </section>
  )
}
