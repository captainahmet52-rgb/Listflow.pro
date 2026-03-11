'use client'

import Link from 'next/link'
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react'

const STORE_STATUSES = [
  { name: 'NordicPrintLab', status: 'TRENDDE', color: 'text-[#10b981]', dot: 'bg-[#10b981]' },
  { name: 'FrameMintCo', status: 'KUYRUKTA', color: 'text-yellow-400', dot: 'bg-yellow-400' },
  { name: 'CraftFlowStudio', status: 'LİSTELENİYOR', color: 'text-[#06b6d4]', dot: 'bg-[#06b6d4] animate-pulse' },
]

const BAR_HEIGHTS = [30, 55, 45, 70, 60, 85, 75, 90]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b5cf6]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06b6d4]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
              <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
              <span className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-widest">
                AI Destekli Etsy Otomasyonu
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-[1.1] animate-fade-in-up delay-100">
              <span className="text-white">Kategorini Seç,</span>
              <br />
              <span className="gradient-text">Otomasyonu</span>
              <br />
              <span className="text-white">Başlat.</span>
            </h1>

            <p className="text-[#a0a0b0] text-lg mb-8 max-w-lg leading-relaxed animate-fade-in-up delay-200">
              Türkiye&apos;deki tedarikçilerle çalışarak Etsy mağazanızdaki ürün listeleme sürecini yapay zeka ile otomatikleştirin.
            </p>

            <div className="flex flex-col gap-3 mb-10 animate-fade-in-up delay-300">
              {[
                'Kategori seç, AI ürünleri belirlesin',
                'Otomatik listeleme ile zamandan tasarruf et',
                '7/24 kesintisiz otomasyon akışı',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#10b981]" />
                  </div>
                  <span className="text-sm text-[#a0a0b0]">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-400">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white font-bold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.02] text-sm shadow-lg shadow-[#8b5cf6]/25"
              >
                HEMEN BAŞLA
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#nasil-calisir"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border border-[#1e1e2e] hover:border-[#8b5cf6]/40 text-[#a0a0b0] hover:text-white font-medium rounded-xl transition-all duration-200 text-sm hover:bg-[#8b5cf6]/5"
              >
                SİSTEMİ TANI
              </a>
            </div>
          </div>

          {/* Right: Live Widget */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-300">
            <div className="w-full max-w-sm relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/15 to-[#06b6d4]/15 rounded-2xl blur-xl" />
              <div className="relative gradient-border-card rounded-2xl p-5 shadow-2xl animate-float">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">SATIŞ KONTROL</div>
                      <div className="text-[10px] text-[#6b6b80]">Anlık mağaza durumları</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#10b981]/10 border border-[#10b981]/20 px-2.5 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-[10px] font-bold text-[#10b981]">LIVE</span>
                  </div>
                </div>

                {/* Store rows */}
                <div className="space-y-2 mb-5">
                  {STORE_STATUSES.map((store) => (
                    <div
                      key={store.name}
                      className="flex items-center justify-between py-2.5 px-3 bg-[#0a0a0f] rounded-xl border border-[#1e1e2e] transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${store.dot}`} />
                        <span className="text-sm font-medium text-white">{store.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider ${store.color}`}>{store.status}</span>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e2e] to-transparent mb-4" />

                {/* Bar chart */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#6b6b80] uppercase tracking-wider">Haftalık listeleme</span>
                    <span className="text-[10px] font-bold text-[#10b981]">+24% bu hafta</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-14">
                    {BAR_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-[#8b5cf6] to-[#06b6d4] transition-opacity hover:opacity-100"
                        style={{ height: `${h}%`, opacity: 0.55 + i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
