import ComingSoon from '@/components/dashboard/ComingSoon'

export default function PinterestPage() {
  return (
    <ComingSoon
      platform="Pinterest Otomasyon"
      description="Trafik odaklı Pinterest büyüme hattı sıradaki roadmap adımı. Pin içerik üretimi, anahtar kelime eşlemesi ve pano yayın akışını otomatikleştirerek organik trafiği mağazalarınıza yönlendirir."
      targetDate="2026 Q2"
      features={[
        'AI destekli pin başlık + açıklama üretimi',
        'Arama görünürlüğü için anahtar kelime kümeleri',
        'Niş bazlı pano strateji şablonları',
        'Zamanlanmış pin yayınlama akışı',
      ]}
      automationSteps={[
        'Niş sinyal analizi',
        'Pin seti üretimi',
        'Kuyruğa al ve yayınla',
        'Performans geri besleme döngüsü',
      ]}
      meaningText="Yayınlandığında Pinterest otomasyonu mevcut mağaza mantığın ve kategori stratejinle entegre çalışacak. Ürünlerin Etsy mağazana Pinterest üzerinden organik trafik çekecek."
    />
  )
}
