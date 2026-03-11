// =============================================
//  PAKET FİYATLARI — buradan değiştir
// =============================================

export const PLANS_CONFIG = [
  {
    id: 'STARTER' as const,
    name: 'STARTER',
    price: '$70',       // ← fiyat
    period: '/ay',
    badge: '',
    features: [
      '1 Etsy mağazası',
      'Günlük 50 listeleme',
      'Temel otomasyon',
      'E-posta desteği',
    ],
  },
  {
    id: 'PRO' as const,
    name: 'PRO',
    price: '$100',       // ← fiyat
    period: '/ay',
    badge: 'POPÜLER',
    features: [
      '3 Etsy mağazası',
      'Günlük 200 listeleme',
      'AI ürün optimizasyonu',
      'Öncelikli destek',
      'Analytics dashboard',
    ],
  },
  {
    id: 'TURBO' as const,
    name: 'TURBO',
    price: '$150',       // ← fiyat
    period: '/ay',
    badge: 'MAKSİMUM',
    features: [
      'Sınırsız mağaza',
      'Sınırsız listeleme',
      'AI tam otomasyon',
      '7/24 öncelikli destek',
      'Özel hesap yöneticisi',
      'Pinterest & Meta entegrasyonu',
    ],
  },
]

export type PlanId = (typeof PLANS_CONFIG)[number]['id']
