import { NextRequest, NextResponse } from 'next/server'
import { stripe, PLAN_PRICE_IDS } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { plan, storeName } = await req.json()

    const priceId = PLAN_PRICE_IDS[plan as keyof typeof PLAN_PRICE_IDS]

    if (!priceId) {
      return NextResponse.json(
        { error: `${plan} planı için fiyat ID'si henüz tanımlanmamış.` },
        { status: 400 }
      )
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { storeName, plan },
      success_url: `${appUrl}/etsy-otomasyon?success=1&store=${encodeURIComponent(storeName)}&plan=${plan}`,
      cancel_url: `${appUrl}/etsy-otomasyon?canceled=1`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Ödeme oturumu oluşturulamadı.' }, { status: 500 })
  }
}
