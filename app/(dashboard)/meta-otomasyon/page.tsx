import ComingSoon from '@/components/dashboard/ComingSoon'

export default function MetaPage() {
  return (
    <ComingSoon
      platform="Meta Otomasyon"
      description="Facebook ve Instagram reklamlarını yapay zeka ile yöneterek Etsy mağazanıza hedefli trafik çekin. Ürün katalog senkronizasyonu ve otomatik reklam optimizasyonu."
      targetDate="2026 Q3"
      features={[
        'Facebook & Instagram reklam otomasyonu',
        'Ürün kataloğu otomatik senkronizasyonu',
        'AI tabanlı hedef kitle analizi',
        'Dinamik reklam optimizasyonu',
        'Dönüşüm takibi ve raporlama',
      ]}
      automationSteps={[
        'Meta Business hesabı bağlantısı',
        'Ürün kataloğu senkronizasyonu',
        'Hedef kitle oluşturma',
        'Kampanya otomasyonu',
      ]}
      meaningText="Meta otomasyonu devreye girdiğinde ürünleriniz Facebook ve Instagram'da hedef kitlenize otomatik olarak gösterilecek. Reklam bütçenizi optimize ederek maksimum ROI sağlayacaksınız."
    />
  )
}
