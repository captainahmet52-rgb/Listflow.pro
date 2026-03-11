'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, User, Zap, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Şifreler eşleşmiyor.')
      return
    }
    if (password.length < 6) {
      setError('Şifre en az 6 karakter olmalıdır.')
      return
    }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => router.push('/login'), 2000)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#10b981]" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Kayıt Başarılı!</h2>
          <p className="text-[#a0a0b0] text-sm mb-1">
            Doğrulama e-postası <span className="text-white">{email}</span> adresine gönderildi.
          </p>
          <p className="text-[#6b6b80] text-xs">Birkaç saniye içinde giriş sayfasına yönlendirileceksiniz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">listflow.pro</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Hesap Oluştur</h1>
          <p className="text-[#6b6b80] text-sm">Ücretsiz başla, hemen otomatikleştir.</p>
        </div>

        {/* Form Card */}
        <div className="bg-[#12121a] border border-[#1e1e2e] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input
              label="AD SOYAD"
              type="text"
              placeholder="Ahmet Kadir Atlı"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<User className="w-4 h-4" />}
              required
              autoComplete="name"
            />

            <Input
              label="E-POSTA"
              type="email"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-4 h-4" />}
              required
              autoComplete="email"
            />

            <Input
              label="ŞİFRE"
              type={showPassword ? 'text' : 'password'}
              placeholder="En az 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#6b6b80] hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              required
              autoComplete="new-password"
            />

            <Input
              label="ŞİFRE TEKRAR"
              type={showPassword ? 'text' : 'password'}
              placeholder="Şifrenizi tekrar girin"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              icon={<Lock className="w-4 h-4" />}
              required
              autoComplete="new-password"
            />

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <Button type="submit" variant="gradient" size="lg" loading={loading} className="w-full mt-2">
              Kayıt Ol
            </Button>
          </form>

          <p className="text-center text-sm text-[#6b6b80] mt-6">
            Zaten hesabın var mı?{' '}
            <Link href="/login" className="text-[#8b5cf6] hover:text-[#a78bfa] transition-colors font-medium">
              Giriş yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
