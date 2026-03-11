'use client'

import { useState } from 'react'
import {
  User, CreditCard, Shield, Upload, Check,
  ShieldCheck, CalendarDays, Zap, Eye, EyeOff, Lock, KeyRound,
} from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

type Tab = 'profil' | 'abonelik' | 'guvenlik'

const TABS = [
  { id: 'profil' as Tab, label: 'Profil Bilgileri', icon: User },
  { id: 'abonelik' as Tab, label: 'Abonelik', icon: CreditCard },
  { id: 'guvenlik' as Tab, label: 'Güvenlik', icon: Shield },
]

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState<Tab>('profil')
  const [lang, setLang] = useState<'TR' | 'EN'>('TR')

  // Profil form state
  const [name, setName] = useState('Ahmet Kadir Atlı')
  const [email, setEmail] = useState('ahmetkadir@listflow.pro')
  const [phone, setPhone] = useState('')
  const [saving, setSaving] = useState(false)

  // Güvenlik state
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [showCurrentPass, setShowCurrentPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)

  async function handleSaveProfile() {
    setSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    toast.success('Profil bilgileri kaydedildi.')
  }

  async function handleChangePassword() {
    if (!currentPass || !newPass) { toast.error('Tüm alanları doldurun.'); return }
    if (newPass.length < 6) { toast.error('Yeni şifre en az 6 karakter olmalı.'); return }
    setSaving(true)
    await new Promise(r => setTimeout(r, 800))
    setSaving(false)
    setCurrentPass(''); setNewPass('')
    toast.success('Şifre başarıyla güncellendi.')
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page header */}
      <h1 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">AYARLAR</h1>

      {/* Hero Banner */}
      <div className="gradient-border-card rounded-2xl p-6 mb-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-full px-3 py-1 mb-4">
            <Zap className="w-3 h-3 text-[#8b5cf6]" />
            <span className="text-[10px] font-bold text-[#8b5cf6] uppercase tracking-wider">HESAP GÜVEN MERKEZİ</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
            Hesap, güvenlik ve faturalandırmayı<br />tek merkezden yönet
          </h2>
          <p className="text-sm text-[#a0a0b0] mb-4">
            Profil tutarlılığı, 2FA doğrulaması ve abonelik görünürlüğü hesap güvenini doğrudan artırır.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 rounded-full px-3 py-1">
              <ShieldCheck className="w-3 h-3" /> KULLANICI HESABI
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 rounded-full px-3 py-1">
              <CalendarDays className="w-3 h-3" /> OLUŞTURULMA: 7 MART 2026
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row lg:flex-col gap-3 lg:min-w-[200px]">
          <div className="flex-1 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3">
            <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">PROFİL TAMAMLANMA</div>
            <div className="text-xl font-bold text-white">100%</div>
          </div>
          <div className="flex-1 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3">
            <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">GÜVENLİK SEVİYESİ</div>
            <div className="text-xl font-bold text-[#06b6d4]">75/100</div>
          </div>
          <div className="flex-1 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3">
            <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">AKTİF PLAN</div>
            <div className="text-xl font-bold text-[#06b6d4]">Turbo</div>
          </div>
        </div>
      </div>

      {/* Main body */}
      <div className="flex gap-6">
        {/* Left tabs */}
        <div className="w-[220px] flex-shrink-0">
          <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl overflow-hidden">
            {TABS.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3.5 text-sm transition-all duration-150 text-left relative',
                    activeTab === tab.id
                      ? 'bg-[#8b5cf6]/10 text-[#8b5cf6] font-medium'
                      : 'text-[#a0a0b0] hover:text-white hover:bg-[#1e1e2e]/50'
                  )}
                >
                  {activeTab === tab.id && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6] rounded-r-full" />
                  )}
                  <Icon className={cn('w-4 h-4 flex-shrink-0', activeTab === tab.id ? 'text-[#8b5cf6]' : 'text-[#6b6b80]')} />
                  {tab.label}
                </button>
              )
            })}

            {/* Language */}
            <div className="px-4 py-3 border-t border-[#1e1e2e]">
              <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-2">DİL</div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLang('TR')}
                  className={cn('flex-1 py-1.5 rounded-lg text-xs font-bold transition-all', lang === 'TR' ? 'bg-[#8b5cf6] text-white' : 'bg-[#1e1e2e] text-[#6b6b80] hover:text-white')}
                >TR</button>
                <button
                  onClick={() => setLang('EN')}
                  className={cn('flex-1 py-1.5 rounded-lg text-xs font-bold transition-all', lang === 'EN' ? 'bg-[#8b5cf6] text-white' : 'bg-[#1e1e2e] text-[#6b6b80] hover:text-white')}
                >EN</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1">
          <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl overflow-hidden">

            {/* Tab header */}
            <div className="px-6 py-5 border-b border-[#1e1e2e]">
              <div className="flex items-center gap-3">
                {activeTab === 'profil' && <User className="w-5 h-5 text-[#8b5cf6]" />}
                {activeTab === 'abonelik' && <CreditCard className="w-5 h-5 text-[#8b5cf6]" />}
                {activeTab === 'guvenlik' && <Shield className="w-5 h-5 text-[#8b5cf6]" />}
                <div>
                  <div className="text-base font-semibold text-[#8b5cf6]">
                    {activeTab === 'profil' && 'Profil Bilgileri'}
                    {activeTab === 'abonelik' && 'Abonelik'}
                    {activeTab === 'guvenlik' && 'Güvenlik'}
                  </div>
                  <div className="text-xs text-[#6b6b80]">
                    {activeTab === 'profil' && 'İletişim ve hesap bilgilerinizi güncelleyin.'}
                    {activeTab === 'abonelik' && 'Abonelik planınızı ve fatura bilgilerinizi görüntüleyin.'}
                    {activeTab === 'guvenlik' && 'Şifrenizi değiştirin ve güvenlik ayarlarınızı yönetin.'}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">

              {/* ── PROFİL BİLGİLERİ ── */}
              {activeTab === 'profil' && (
                <div className="space-y-5">
                  {/* Profile photo */}
                  <div className="flex items-center justify-between p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/20">
                        <span className="text-lg font-bold text-white">AK</span>
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-0.5">PROFİL FOTOĞRAFI</div>
                        <div className="text-sm text-white font-medium">Dashboard oturum kartınızda görünür.</div>
                        <div className="text-xs text-[#6b6b80]">PNG, JPG veya WEBP. En fazla 5 MB.</div>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] border border-[#2e2e4e] text-[#a0a0b0] hover:text-white hover:bg-[#2e2e4e] text-xs font-semibold rounded-lg transition-all">
                      <Upload className="w-3.5 h-3.5" />
                      PROFİL FOTOĞRAFI YÜKLE
                    </button>
                  </div>

                  {/* Form */}
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1.5">AD SOYAD</label>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3e3e5e] focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all"
                      placeholder="Ahmet Kadir Atlı"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1.5">E-POSTA</label>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3e3e5e] focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all"
                      placeholder="ahmetkadir@listflow.pro"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1.5">TELEFON</label>
                    <input
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      type="tel"
                      className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3e3e5e] focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all"
                      placeholder="+90 555 000 00 00"
                    />
                  </div>

                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#8b5cf6]/20"
                  >
                    {saving ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Check className="w-4 h-4" />
                    )}
                    BİLGİLERİ KAYDET
                  </button>
                </div>
              )}

              {/* ── ABONELİK ── */}
              {activeTab === 'abonelik' && (
                <div className="space-y-4">
                  <div className="p-5 bg-[#0a0a0f] border border-[#06b6d4]/30 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">AKTİF PLAN</div>
                        <div className="text-2xl font-bold text-[#06b6d4]">TURBO</div>
                      </div>
                      <span className="px-3 py-1 bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-bold rounded-full">AKTİF</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {['Sınırsız Etsy Mağazası', '4 saatte bir ürün yükleme', 'Tüm kategoriler + özel niş', 'Sınırsız ürün kataloğu', '7/24 öncelikli destek', 'Özel hesap yöneticisi'].map(f => (
                        <div key={f} className="flex items-center gap-2 text-[#a0a0b0] text-xs">
                          <Check className="w-3 h-3 text-[#10b981] flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">SONRAKI ÖDEME</div>
                      <div className="text-sm font-semibold text-white">$150 / 12 Nisan 2026</div>
                    </div>
                    <button className="px-4 py-2 bg-[#1e1e2e] border border-[#2e2e4e] text-[#a0a0b0] hover:text-white text-xs font-semibold rounded-lg transition-all">
                      FATURA GEÇMİŞİ
                    </button>
                  </div>
                  <div className="p-4 bg-[#1e1e2e]/40 border border-[#1e1e2e] rounded-xl text-center">
                    <p className="text-xs text-[#6b6b80]">Plan değişikliği için ekibimizle iletişime geçin.</p>
                  </div>
                </div>
              )}

              {/* ── GÜVENLİK ── */}
              {activeTab === 'guvenlik' && (
                <div className="space-y-5">
                  <div className="p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#06b6d4]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white mb-0.5">Güvenlik Seviyesi</div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
                          <div className="h-full w-[75%] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] rounded-full" />
                        </div>
                        <span className="text-xs font-bold text-[#06b6d4]">75/100</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <KeyRound className="w-4 h-4 text-[#8b5cf6]" />
                      Şifre Değiştir
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1.5">MEVCUT ŞİFRE</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b80]" />
                          <input
                            type={showCurrentPass ? 'text' : 'password'}
                            value={currentPass}
                            onChange={e => setCurrentPass(e.target.value)}
                            className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl pl-11 pr-11 py-3 text-sm text-white placeholder:text-[#3e3e5e] focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all"
                            placeholder="••••••••"
                          />
                          <button type="button" onClick={() => setShowCurrentPass(!showCurrentPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6b80] hover:text-white transition-colors">
                            {showCurrentPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1.5">YENİ ŞİFRE</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b80]" />
                          <input
                            type={showNewPass ? 'text' : 'password'}
                            value={newPass}
                            onChange={e => setNewPass(e.target.value)}
                            className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl pl-11 pr-11 py-3 text-sm text-white placeholder:text-[#3e3e5e] focus:outline-none focus:border-[#8b5cf6]/60 focus:ring-1 focus:ring-[#8b5cf6]/30 transition-all"
                            placeholder="••••••••"
                          />
                          <button type="button" onClick={() => setShowNewPass(!showNewPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6b80] hover:text-white transition-colors">
                            {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleChangePassword}
                      disabled={saving}
                      className="mt-4 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {saving ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Shield className="w-4 h-4" />
                      )}
                      ŞİFREYİ GÜNCELLE
                    </button>
                  </div>

                  <div className="p-4 bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-white mb-0.5">İki Faktörlü Doğrulama (2FA)</div>
                      <div className="text-xs text-[#6b6b80]">Hesabınızı ekstra güvence altına alın.</div>
                    </div>
                    <span className="text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full font-semibold">YAKINDA</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
