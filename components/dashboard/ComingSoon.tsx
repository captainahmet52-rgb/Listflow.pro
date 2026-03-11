import { Clock, CheckCircle, LucideIcon } from 'lucide-react'

interface ComingSoonProps {
  platform: string
  badgeText?: string
  description: string
  targetDate?: string
  features: string[]
  automationSteps?: string[]
  meaningText?: string
}

export default function ComingSoon({
  platform,
  badgeText = 'YAKINDA',
  description,
  targetDate,
  features,
  automationSteps,
  meaningText,
}: ComingSoonProps) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-[#6b6b80] uppercase tracking-wider border border-[#1e1e2e] px-2 py-0.5 rounded-md">
              {platform.toUpperCase()}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white">{platform}</h1>
          <p className="text-sm text-[#a0a0b0] mt-1 max-w-lg">{description}</p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2">
          <span className="text-xs font-bold px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full uppercase tracking-wider">
            {badgeText}
          </span>
          {targetDate && (
            <div className="flex items-center gap-1.5 text-xs text-[#6b6b80]">
              <Clock className="w-3.5 h-3.5" />
              Hedef lansman: {targetDate}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Features */}
        <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6">
          <h2 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Planlanan Özellikler</h2>
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 opacity-70">
                <div className="w-5 h-5 rounded-full border border-[#1e1e2e] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6b6b80]" />
                </div>
                <span className="text-sm text-[#a0a0b0]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Flow */}
        {automationSteps && (
          <div className="bg-[#12121a] border border-[#1e1e2e] rounded-xl p-6">
            <h2 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Otomasyon Akışı</h2>
            <div className="space-y-3">
              {automationSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-[#8b5cf6]">{idx + 1}</span>
                  </div>
                  <span className="text-sm text-[#a0a0b0] pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Meaning */}
      {meaningText && (
        <div className="bg-[#8b5cf6]/5 border border-[#8b5cf6]/20 rounded-xl p-6 mb-6">
          <h3 className="text-xs font-semibold text-[#8b5cf6] uppercase tracking-wider mb-2">SENİN İÇİN ANLAMI</h3>
          <p className="text-sm text-[#a0a0b0] leading-relaxed">{meaningText}</p>
        </div>
      )}

      {/* CTA */}
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#12121a] border border-[#1e1e2e] text-[#a0a0b0] hover:border-[#8b5cf6]/50 hover:text-white rounded-xl text-sm font-medium transition-all duration-200">
          <CheckCircle className="w-4 h-4 text-[#10b981]" />
          ROADMAP AKTİF
        </button>
      </div>
    </div>
  )
}
