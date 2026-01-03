import 'server-only'
import { useLocale } from 'next-intl'
import { isRussianLocale } from '@/shared/utils'

export const ContactButton = () => {
  const locale = useLocale()
  if (isRussianLocale(locale)) return <button>телефон</button>

  return <button>contact</button>
}
