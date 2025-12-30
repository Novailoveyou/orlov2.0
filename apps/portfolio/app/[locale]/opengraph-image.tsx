import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from '@/app/_/i18n/routing'
import { notFound } from 'next/navigation'

export default async function OpenGraphImage({
  params,
}: Pick<LayoutProps<'/[locale]'>, 'params'>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) return notFound()

  const t = await getTranslations({ locale, namespace: 'app.OpenGraphImage' })

  return new ImageResponse(<div style={{ fontSize: 128 }}>{t('alt')}</div>)
}
