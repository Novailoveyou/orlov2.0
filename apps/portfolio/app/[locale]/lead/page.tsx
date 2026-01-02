import 'server-only'

import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/app/_/i18n/routing'
import { hasLocale } from 'next-intl'
import { Metadata } from 'next'
import { LeadView } from '@/views/lead-view'

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/lead'>): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale))
    return {
      title: '',
    }

  const t = await getTranslations({ locale, namespace: 'app.home.meta' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LeadPage({
  params,
}: PageProps<'/[locale]/lead'>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) return notFound()

  setRequestLocale(locale)

  return <LeadView />
}
