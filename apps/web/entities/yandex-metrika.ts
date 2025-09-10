import { createYandexMetrika } from '@repo/next-yandex-metrika'

export const { ym, YandexMetrika } = createYandexMetrika({
  yaCounterId: 0,
  visitParams: {
    currency: 'RUB',
    order_price: 100,
  },
})
