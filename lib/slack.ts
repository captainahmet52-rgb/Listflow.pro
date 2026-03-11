export async function sendSlackNotification(message: {
  storeName: string
  plan: string
  amount: number
  currency: string
  customerEmail?: string
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) return // webhook tanımlı değilse sessizce geç

  const planEmoji: Record<string, string> = {
    STARTER: '⚡',
    PRO: '🌟',
    TURBO: '🚀',
  }

  const emoji = planEmoji[message.plan] ?? '💳'
  const amountFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: message.currency.toUpperCase(),
  }).format(message.amount / 100)

  const payload = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${emoji} Yeni Ödeme Alındı!`,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Mağaza:*\n${message.storeName}`,
          },
          {
            type: 'mrkdwn',
            text: `*Plan:*\n${message.plan}`,
          },
          {
            type: 'mrkdwn',
            text: `*Tutar:*\n${amountFormatted}`,
          },
          {
            type: 'mrkdwn',
            text: `*Müşteri:*\n${message.customerEmail ?? 'Bilinmiyor'}`,
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `🕐 ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })} • listflow.pro`,
          },
        ],
      },
    ],
  }

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}
