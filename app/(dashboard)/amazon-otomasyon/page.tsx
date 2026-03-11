import ComingSoon from '@/components/dashboard/ComingSoon'

export default function AmazonPage() {
  return (
    <ComingSoon
      platform="Amazon Otomasyon"
      description="Amazon'un devasa pazarına erişin. Ürünlerinizi Amazon'da otomatik listeleyin, FBA entegrasyonu ile lojistiği kolaylaştırın ve satışlarınızı katlamak için AI tabanlı optimizasyon kullanın."
      targetDate="2027 Q1"
      features={[
        'Amazon Seller Central entegrasyonu',
        'FBA (Fulfillment by Amazon) desteği',
        'AI tabanlı Amazon SEO optimizasyonu',
        'Rekabetçi fiyatlandırma otomasyonu',
        'A+ içerik üretimi desteği',
        'Review yönetimi ve analitik',
      ]}
      automationSteps={[
        'Amazon Seller hesabı bağlantısı',
        'Ürün listesi optimizasyonu',
        'FBA gönderim planlaması',
        'Satış ve performans takibi',
      ]}
      meaningText="Amazon otomasyonu ile dünyanın en büyük e-ticaret platformuna açılın. Mevcut tedarikçi ağınız ve ürün kataloğunuz Amazon'a sorunsuz taşınacak."
    />
  )
}
