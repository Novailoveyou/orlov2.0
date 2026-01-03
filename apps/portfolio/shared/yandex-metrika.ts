'use client'
import 'client-only'

import { createYandexMetrika } from '@repo/next-yandex-metrika'

export const { ym, YandexMetrika } = createYandexMetrika<'lead'>({
  yaCounterId: process.env.NODE_ENV === 'development' ? 0 : 106107184,
  visitParams: {
    currency: 'USD',
    order_price: 5,
  },
})
