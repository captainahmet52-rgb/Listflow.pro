import ComingSoon from '@/components/dashboard/ComingSoon'

export default function EbayPage() {
  return (
    <ComingSoon
      platform="Ebay Otomasyon"
      description="Etsy'deki başarılı ürünlerinizi eBay'e otomatik olarak listeleyin. Fiyatlandırma, stok yönetimi ve sipariş senkronizasyonunu tek platformdan yönetin."
      targetDate="2026 Q4"
      features={[
        'Otomatik ürün listeleme (Etsy → eBay)',
        'Dinamik fiyatlandırma stratejisi',
        'Çoklu platform stok senkronizasyonu',
        'eBay SEO optimizasyonu',
        'Sipariş yönetimi entegrasyonu',
      ]}
      automationSteps={[
        'eBay mağaza bağlantısı',
        'Ürün kataloğu aktarımı',
        'Fiyat optimizasyonu',
        'Stok ve sipariş senkronizasyonu',
      ]}
      meaningText="eBay otomasyonu ile aynı ürünleri farklı platformlarda satarak gelirinizi çeşitlendirin. Stok ve fiyat yönetimi otomatik olarak senkronize edilecek."
    />
  )
}
