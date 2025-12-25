import { formats } from '@/i18n/request'
import { Locale } from '@/shared/types'
import enMessages from '@/i18n/messages/en.json'

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof enMessages
    Formats: typeof formats
  }
}
