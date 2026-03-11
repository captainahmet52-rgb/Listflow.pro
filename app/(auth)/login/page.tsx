'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, Zap, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#8b5cf6]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#06b6d4]/8 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      />
      <div className="w-full max-w-md relative">
        <div className="text-center mb-8 animate-fade-in-up">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/30 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">listflow.pro</span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Tekrar hoş geldin</h1>
          <p className="text-[#6b6b80] text-sm">Hesabına giriş yap ve otomasyonu başlat.</p>
        </div>
        <div className="animate-fade-in-up delay-100">
          <div className="gradient-border-card rounded-2xl p-8 shadow-2xl shadow-black/40">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input label="E-POSTA" type="email" placeholder="ornek@email.com" value={email} onChange={(e) => setEmail(e.target.value)} icon={<Mail className="w-4 h-4" />} required autoComplete="email" />
              <Input label="ŞİFRE" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} icon={<Lock className="w-4 h-4" />} rightIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[#6b6b80] hover:text-white transition-colors">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>} required autoComplete="current-password" />
              <Button type="submit" variant="gradient" size="lg" loading={loading} className="w-full mt-1">
                {!loading && <ArrowRight className="w-4 h-4" />}
                Giriş Yap
              </Button>
            </form>
            <p className="text-center text-sm text-[#6b6b80] mt-6">
              Hesabın yok mu?{' '}
              <Link href="/register" className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-semibold">Kayıt ol</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
