import 'server-only'

import { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/app/_/i18n/routing'

// TODO: figure out manifest with i18n
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = routing.defaultLocale
  const t = await getTranslations({ locale, namespace: 'Test1' })

  return {
    name: t('title'),
    short_name: 'NextPWA',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#101E33',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
