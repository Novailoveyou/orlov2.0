import 'server-only'
import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'
import { cookies } from 'next/headers'
import { LOCALE_COOKIE_NAME } from '@/shared/constants/client'

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  let requested = await requestLocale

  if (!requested) {
    const store = await cookies()
    requested = store.get(LOCALE_COOKIE_NAME)?.value
  }

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    timeZone: 'Asia/Dubai', // TODO: change timeZone
    messages: { ...(await import(`./messages/${locale}.json`)).default },
  }
})
