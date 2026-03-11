import { Zap, TrendingUp, RefreshCw, Shield, Clock, Brain } from 'lucide-react'

const FEATURES = [
  {
    icon: Brain,
    title: 'AI Trend Analizi',
    desc: 'Yapay zeka trendleri analiz eder ve en kazançlı ürünleri öne çıkarır.',
    badge: 'TEMEL',
    badgeClass: 'bg-[#1e1e2e] text-[#a0a0b0]',
  },
  {
    icon: Zap,
    title: 'Tek Tık Mağaza Kurulumu',
    desc: 'Mağazanı saniyeler içinde bağla, otomasyon hemen devreye girsin.',
    badge: 'TEMEL',
    badgeClass: 'bg-[#1e1e2e] text-[#a0a0b0]',
  },
  {
    icon: RefreshCw,
    title: 'Otomatik Ürün Listeleme',
    desc: 'Ürünler belirlenen sıklıkla otomatik olarak Etsy\'de listelenir.',
    badge: 'TEMEL',
    badgeClass: 'bg-[#1e1e2e] text-[#a0a0b0]',
  },
  {
    icon: TrendingUp,
    title: 'Satışa Odaklı Ölçekleme',
    desc: 'Performans verilerine göre otomatik olarak büyüme stratejileri uygula.',
    badge: 'TEMEL',
    badgeClass: 'bg-[#1e1e2e] text-[#a0a0b0]',
  },
  {
    icon: Shield,
    title: 'AI Trend Radarı',
    desc: 'Yapay zeka pazar sinyallerini sürekli tarar, trendleri önce sen yakala.',
    badge: 'AI',
    badgeClass: 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20',
  },
  {
    icon: Clock,
    title: 'Tek Tık Listeleme Akışı',
    desc: '7/24 kesintisiz çalışan otomasyon ile mağazan her zaman aktif.',
    badge: 'BÜYÜME',
    badgeClass: 'bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20',
  },
]

export default function Features() {
  return (
    <section id="ozellikler" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trendleri yakala, kazandıran ürünleri üret,
            <br />
            <span className="gradient-text">listeleme akışını otomatik yönet.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#8b5cf6]/30 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center group-hover:bg-[#8b5cf6]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#8b5cf6]" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${feature.badgeClass}`}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#a0a0b0] leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
