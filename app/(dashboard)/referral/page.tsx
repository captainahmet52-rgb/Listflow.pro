'use client'

import { useState } from 'react'
import {
  Gift,
  Copy,
  Check,
  Users,
  Zap,
  Share2,
  QrCode,
} from 'lucide-react'

const REFERRAL_CODE = 'UVMTNV9T'
const REFERRAL_LINK = 'https://listflow.pro/login?ref=UVMTNV9T'
const USER_NAME = 'Ahmet Kadir Atlı'

const MILESTONES = [
  {
    target: 5,
    current: 0,
    title: '5 Nitelikli Referral',
    reward: 'Sonraki mağazada %20 indirim',
    rewardColor: 'text-[#8b5cf6]',
    description: 'Bir sonraki mağaza aboneliğinize uygulanacak Stripe promo kodu.',
  },
  {
    target: 10,
    current: 0,
    title: '10 Nitelikli Referral',
    reward: '$250 Nakit Ödül',
    rewardColor: 'text-[#06b6d4]',
    description: 'Nakit ödeme 7 iş günü içinde işleme alınır.',
  },
]

const STEPS = [
  {
    num: '01',
    icon: Share2,
    iconColor: 'text-[#8b5cf6]',
    iconBg: 'bg-[#8b5cf6]/10',
    title: 'Linkini Paylaş',
    desc: 'Referral linkini veya QR kodunu kopyalayıp arkadaşlarınla paylaş.',
  },
  {
    num: '02',
    icon: Users,
    iconColor: 'text-[#06b6d4]',
    iconBg: 'bg-[#06b6d4]/10',
    title: 'Arkadaşın Kayıt Olur',
    desc: 'Arkadaşın linkinden kayıt olur ve ilk mağazasını Pro veya Turbo planla aktive eder.',
  },
  {
    num: '03',
    icon: Gift,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-400/10',
    title: 'Ödülünü Kazan',
    desc: 'Kilometre taşlarına ulaştıkça indirim kuponu ve nakit ödül kazan.',
  },
]

export default function ReferralPage() {
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  function copyLink() {
    navigator.clipboard.writeText(REFERRAL_LINK)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  function copyCode() {
    navigator.clipboard.writeText(REFERRAL_CODE)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider border border-[#1e1e2e] px-2 py-0.5 rounded-md">
          REFERRAL PROGRAMI
        </span>
      </div>

      {/* Hero Card */}
      <div className="relative bg-gradient-to-br from-[#1a1030] via-[#12121a] to-[#0a1520] border border-[#8b5cf6]/20 rounded-2xl p-6 mb-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06b6d4]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 flex items-center justify-center flex-shrink-0">
              <Gift className="w-7 h-7 text-[#8b5cf6]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-wider mb-1">Referral Programı</div>
              <div className="text-sm text-[#6b6b80] mb-2">{USER_NAME}</div>
              <h1 className="text-2xl font-bold text-white mb-2">Arkadaşlarını Davet Et,<br />Ödül Kazan</h1>
              <p className="text-sm text-[#a0a0b0] max-w-md">
                5 arkadaşın ilk Pro veya Turbo mağazasını aktive etsin, bir sonraki mağazanda %20 indirim kazan. 10 kişiye ulaştığında $250 nakit kazanırsın.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-3 lg:flex-col lg:items-end">
            <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-5 py-3 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-[#6b6b80]" />
                <span className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider">Kayıtlar</span>
              </div>
              <div className="text-2xl font-bold text-white">0</div>
            </div>
            <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl px-5 py-3 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5 text-[#6b6b80]" />
                <span className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider">Nitelikli</span>
              </div>
              <div className="text-2xl font-bold text-white">0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Link + QR Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {/* Referral Link */}
        <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="w-4 h-4 text-[#8b5cf6]" />
            <span className="text-xs font-semibold text-[#a0a0b0] uppercase tracking-wider">Referral Linkin</span>
          </div>

          {/* Link Row */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-3 py-2.5 text-xs text-[#6b6b80] truncate font-mono">
              {REFERRAL_LINK}
            </div>
            <button
              onClick={copyLink}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-lg text-xs font-bold text-white transition-colors flex-shrink-0"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedLink ? 'KOPYALANDI' : 'KOPYALA'}
            </button>
          </div>

          {/* Code Row */}
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-lg px-3 py-2.5 flex items-center gap-3 flex-1">
              <span className="text-[10px] text-[#6b6b80] uppercase tracking-wider">KOD</span>
              <span className="text-sm font-bold text-white tracking-widest font-mono">{REFERRAL_CODE}</span>
            </div>
            <button
              onClick={copyCode}
              className="p-2.5 bg-[#1e1e2e] hover:bg-[#2e2e3e] rounded-lg text-[#6b6b80] hover:text-white transition-colors"
            >
              {copiedCode ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <p className="text-xs text-[#6b6b80]">
            Bu linki arkadaşlarınla paylaş. İlerlemen yalnızca ilk mağazalarını Pro veya Turbo planla aktive ettiklerinde artar.
          </p>
        </div>

        {/* QR Code */}
        <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-4 self-start">
            <QrCode className="w-4 h-4 text-[#06b6d4]" />
            <span className="text-xs font-semibold text-[#a0a0b0] uppercase tracking-wider">QR Kod</span>
          </div>
          {/* QR Code visual placeholder */}
          <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center mb-3 relative overflow-hidden">
            <div className="absolute inset-2 grid grid-cols-7 grid-rows-7 gap-0.5">
              {Array.from({ length: 49 }).map((_, i) => {
                const pattern = [
                  1,1,1,1,1,1,1,
                  1,0,0,0,0,0,1,
                  1,0,1,0,1,0,1,
                  1,0,0,0,0,0,1,
                  1,0,1,1,1,0,1,
                  1,0,0,0,0,0,1,
                  1,1,1,1,1,1,1,
                ]
                const row = Math.floor(i / 7)
                const col = i % 7
                const isCorner = (row < 7 && col < 7)
                const filled = isCorner && pattern[i] === 1
                return (
                  <div
                    key={i}
                    className={`rounded-[1px] ${filled ? 'bg-black' : 'bg-white'}`}
                  />
                )
              })}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <p className="text-xs text-[#6b6b80] text-center">
            Arkadaşların bu QR kodu tarayarak referral linkiyle katılabilir.
          </p>
        </div>
      </div>

      {/* Milestones */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-[#6b6b80] uppercase tracking-wider mb-4">Kilometre Taşları & Ödüller</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MILESTONES.map((m, i) => (
            <div key={i} className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="#1e1e2e" strokeWidth="4" />
                    <circle
                      cx="28" cy="28" r="24"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 24}`}
                      strokeDashoffset={`${2 * Math.PI * 24 * (1 - m.current / m.target)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{m.current}/{m.target}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">{i + 1}. Hedef</div>
                  <div className="text-sm font-bold text-white mb-1">{m.title}</div>
                  <div className={`text-xs font-semibold mb-2 ${m.rewardColor}`}>→ {m.reward}</div>
                  <p className="text-xs text-[#6b6b80]">{m.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-[#6b6b80] uppercase tracking-wider mb-4">Nasıl Çalışır?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-5">
                <div className={`w-10 h-10 rounded-xl ${step.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>
                <div className="text-[10px] font-semibold text-[#6b6b80] uppercase tracking-wider mb-1">Adım {step.num}</div>
                <div className="text-sm font-bold text-white mb-2">{step.title}</div>
                <p className="text-xs text-[#6b6b80]">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Empty referrals state */}
      <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full bg-[#1e1e2e] flex items-center justify-center mb-4">
          <Users className="w-7 h-7 text-[#6b6b80]" />
        </div>
        <h3 className="text-base font-semibold text-white mb-2">Henüz referral yok</h3>
        <p className="text-sm text-[#6b6b80] mb-6">Ödül kazanmaya başlamak için yukarıdaki referral linkini paylaş!</p>
        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-xl text-sm font-bold text-white transition-colors"
        >
          {copiedLink ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
          {copiedLink ? 'Kopyalandı!' : 'Linkimi Kopyala'}
        </button>
      </div>
    </div>
  )
}
