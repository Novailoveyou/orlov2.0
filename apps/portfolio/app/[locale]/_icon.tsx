import 'server-only'
import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from '@/app/_/i18n/routing'
import { LogoImageStatic } from '@/features/logo/logo-image-static'

// TODO figure out icon
// export const size = {
//   width: 32,
//   height: 32,
// }

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 32, height: 32 },
      id: 'small',
    },
    {
      contentType: 'image/png',
      size: { width: 64, height: 64 },
      id: 'medium',
    },
  ]
}

export const contentType = 'image/png'

export default async function Icon({
  id,
  params,
}: Pick<LayoutProps<'/[locale]'>, 'params'> & { id: Promise<string> }) {
  const { locale } = await params
  const iconId = await id

  if (!hasLocale(routing.locales, locale))
    return new ImageResponse(<LogoImageStatic />)

  const t = await getTranslations({ locale, namespace: 'app.OpenGraphImage' })

  return new ImageResponse(<LogoImageStatic alt={t('alt')} />)
}
