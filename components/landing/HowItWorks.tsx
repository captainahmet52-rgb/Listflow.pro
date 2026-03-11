import { Search, Brain, TrendingUp } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    title: 'PAZARI SEÇ',
    desc: 'Kategori ve ürün yönünü belirle. AI trendleri analiz eder, en karlı fırsatları sana sunar.',
    icon: Search,
  },
  {
    number: '02',
    title: 'AI ÜRÜN MOTORUNU BAŞLAT',
    desc: 'Yapay zeka, seçtiğin kategoriye göre en çok satan ürün fikirlerini öne çıkarır ve listeler.',
    icon: Brain,
  },
  {
    number: '03',
    title: 'LİSTELEME HIZINI ÖLÇEKLE',
    desc: 'Ürünler düzenli aralıklarla otomatik güncellenir. Sen büyümeye odaklan, sistem çalışır.',
    icon: TrendingUp,
  },
]

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="text-xs font-medium text-[#06b6d4] uppercase tracking-widest border border-[#06b6d4]/20 bg-[#06b6d4]/5 px-4 py-1.5 rounded-full">
            BÜYÜME DÖNGÜN 3 ADIMDA ÇALIŞIR
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Nişini seç, mağazanı bağla,
            <br />
            <span className="gradient-text">AI destekli otomasyon</span> satış tarafını hızlandırsın.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector Lines (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] opacity-30" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6 text-center hover:border-[#8b5cf6]/30 transition-all duration-200"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-xs font-bold text-[#6b6b80] mb-2">{step.number}</div>
                <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#a0a0b0] leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
