import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { sendSlackNotification } from '@/lib/slack'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  // Webhook secret yoksa doğrulama atlıyoruz (development)
  let event
  if (webhookSecret && sig) {
    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    } catch (err) {
      console.error('Webhook signature doğrulama hatası:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }
  } else {
    event = JSON.parse(body)
  }

  // Ödeme tamamlandı
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object

    const storeName = session.metadata?.storeName ?? 'Bilinmeyen Mağaza'
    const plan = session.metadata?.plan ?? 'STARTER'
    const amount = session.amount_total ?? 0
    const currency = session.currency ?? 'usd'
    const customerEmail = session.customer_details?.email ?? undefined

    // Slack bildirimi gönder
    await sendSlackNotification({ storeName, plan, amount, currency, customerEmail })

    console.log(`✅ Ödeme alındı: ${storeName} - ${plan} - ${amount}`)
  }

  return NextResponse.json({ received: true })
}
