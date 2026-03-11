import Link from 'next/link'
import StatsCard from '@/components/dashboard/StatsCard'
import ChecklistItem from '@/components/dashboard/ChecklistItem'
import StoreStatusCard from '@/components/dashboard/StoreStatusCard'
import { Store, Package, ShoppingBag, AlertTriangle, ArrowRight, Grid3X3, Wrench, Plus } from 'lucide-react'

const CHECKLIST_ITEMS = [
  { id: '1', label: 'Profilini tamamla', completed: false, href: '/dashboard', buttonLabel: 'PROFİLİ AÇ' },
  { id: '2', label: 'İlk mağazanı oluştur', completed: false, href: '/etsy-otomasyon', buttonLabel: 'MAĞAZALARA GİT' },
  { id: '3', label: 'Mağazanı aktive et veya yenile', completed: false, href: '/etsy-otomasyon', buttonLabel: 'MAĞAZALARI İNCELE' },
  { id: '4', label: 'Eklentiyi indir', completed: false, href: '#', buttonLabel: 'İNDİRME SAYFASI' },
  { id: '5', label: 'İlk ürününü sıraya al', completed: false, href: '/urunler', buttonLabel: 'ÜRÜNLERİ AÇ' },
  { id: '6', label: 'Sipariş akışını test et', completed: false, href: '/siparislerim', buttonLabel: 'SİPARİŞLERİ AÇ' },
]

const MOCK_STORES: { name: string; status: 'active' | 'inactive' | 'pending'; category: string; order_count: number }[] = []

export default function DashboardPage() {
  const userName = 'Ahmet Kadir Atlı'
  const userEmail = 'ahmetkadir@listflow.pro'
  const completedCount = CHECKLIST_ITEMS.filter(i => i.completed).length

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider border border-[#1e1e2e] px-2 py-0.5 rounded-md">
              KONTROL MERKEZİ
            </span>
            <span className="text-xs font-medium text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded-md">
              TURBO
            </span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {userName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="text-xs text-[#6b6b80] uppercase tracking-wider">HESAP ÖZETİ</div>
              <div className="text-xs text-[#a0a0b0]">{userEmail}</div>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">
            Tekrar hoş geldin, {userName.split(' ')[0]}.
          </h1>
          <p className="text-[#a0a0b0] text-sm max-w-xl">
            Mağazanı tek ekrandan yönet ve sıradaki kritik adımı anında gör.
          </p>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-2 lg:items-end">
          <div className="flex items-center gap-2 bg-[#12121a] border border-[#1e1e2e] rounded-lg px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-xs text-[#a0a0b0]">MAĞAZA SAĞLIĞI:</span>
            <span className="text-xs font-bold text-[#10b981]">0/0</span>
            <span className="text-xs text-[#6b6b80]">Yayına hazır aktif mağaza</span>
          </div>
          <div className="flex items-center gap-2 bg-[#12121a] border border-[#1e1e2e] rounded-lg px-4 py-2">
            <span className="text-xs text-[#a0a0b0]">YÜKLEME KUYRUĞU:</span>
            <span className="text-xs font-bold text-white">0</span>
            <span className="text-xs text-[#6b6b80]">Eklenti için hazır ürün</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="MAĞAZALAR"
          value="0"
          subtitle="Henüz mağaza eklenmedi"
          icon={Store}
          iconColor="text-[#8b5cf6]"
          accentColor="bg-[#8b5cf6]/10"
        />
        <StatsCard
          title="ÜRÜNLER"
          value="0"
          subtitle="Henüz ürün eklenmedi"
          icon={Package}
          iconColor="text-[#06b6d4]"
          accentColor="bg-[#06b6d4]/10"
        />
        <StatsCard
          title="SİPARİŞLER"
          value="0"
          subtitle="0 ödemesi alındı"
          icon={ShoppingBag}
          iconColor="text-[#10b981]"
          accentColor="bg-[#10b981]/10"
        />
        <StatsCard
          title="DİKKAT"
          value="0"
          subtitle="0 yenileme, 0 aktivasyon"
          icon={AlertTriangle}
          iconColor="text-yellow-400"
          accentColor="bg-yellow-400/10"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Checklist */}
        <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-semibold text-white">Seni ileri taşıyacak sonraki adımlar</h2>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1 bg-[#1e1e2e] rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / CHECKLIST_ITEMS.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-[#6b6b80] flex-shrink-0">{completedCount}/{CHECKLIST_ITEMS.length}</span>
          </div>

          <div>
            {CHECKLIST_ITEMS.map((item, idx) => (
              <ChecklistItem
                key={item.id}
                {...item}
                isLast={idx === CHECKLIST_ITEMS.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Store Status */}
        <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6">
          <h2 className="text-base font-semibold text-white mb-1">Mağazalarının bugünkü durumu</h2>
          <p className="text-xs text-[#6b6b80] mb-5">Tüm aktif mağazalarınızın anlık bağlantı durumu</p>
          {MOCK_STORES.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-10 h-10 rounded-full bg-[#1e1e2e] flex items-center justify-center mb-3">
                <Store className="w-5 h-5 text-[#6b6b80]" />
              </div>
              <p className="text-sm text-[#6b6b80] mb-3">Henüz mağaza eklenmedi.</p>
              <Link href="/etsy-otomasyon" className="inline-flex items-center gap-1.5 text-xs text-[#8b5cf6] hover:text-[#a78bfa] transition-colors">
                <Plus className="w-3.5 h-3.5" />
                Mağaza ekle
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {MOCK_STORES.map((store) => (
                <StoreStatusCard key={store.name} store={store} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6">
        <h2 className="text-base font-semibold text-white mb-4">Hızlı Bağlantılar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/kategoriler" className="flex items-center justify-between p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg hover:border-[#8b5cf6]/50 transition-all duration-150 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center">
                <Grid3X3 className="w-4 h-4 text-[#8b5cf6]" />
              </div>
              <span className="text-sm font-medium text-white">Kategorileri İncele</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#6b6b80] group-hover:text-[#8b5cf6] transition-colors" />
          </Link>

          <Link href="/etsy-otomasyon" className="flex items-center justify-between p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg hover:border-[#06b6d4]/50 transition-all duration-150 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-[#06b6d4]" />
              </div>
              <span className="text-sm font-medium text-white">Araçları Kur</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#6b6b80] group-hover:text-[#06b6d4] transition-colors" />
          </Link>

          <Link href="#" className="flex items-center justify-between p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg hover:border-[#10b981]/50 transition-all duration-150 group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#10b981]" />
              </div>
              <span className="text-sm font-medium text-white">Referral ile Büyü</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#6b6b80] group-hover:text-[#10b981] transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  )
}
