import 'server-only'

import { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/app/_/i18n/routing'

// TODO: figure out manifest with i18n
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = routing.defaultLocale
  const t = await getTranslations({ locale, namespace: 'HomePage' })

  return {
    name: t('title'),
    start_url: '/',
    theme_color: '#101E33',
  }
}
