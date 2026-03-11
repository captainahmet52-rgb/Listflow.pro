const STATS = [
  { value: '10x', label: 'DAHA HIZLI ÜRÜN ÇIKIŞI' },
  { value: '%92', label: 'DAHA AZ MANUEL İŞ' },
  { value: '7/24', label: 'OTOMATİK LİSTELEME AKIŞI' },
  { value: '3x', label: 'DAHA GENİŞ KATALOG ERİŞİMİ' },
]

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
