import 'server-only'

import { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/app/_/i18n/routing'

// TODO: figure out manifest with i18n
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = routing.defaultLocale
  const t = await getTranslations({ locale, namespace: 'app.manifest' })

  return {
    name: t('name'),
    short_name: t('short_name'),
    description: t('description'),
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#101E33',
    icons: [
      {
        src: '/vercel.svg',
        sizes: '48x48 72x72 96x96 128x128 256x256 512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      // {
      //   src: '/icon-192x192.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
      // {
      //   src: '/icon-512x512.png',
      //   sizes: '512x512',
      //   type: 'image/png',
      // },
    ],
  }
}
