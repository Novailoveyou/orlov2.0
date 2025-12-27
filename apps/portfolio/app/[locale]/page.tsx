import 'server-only'

import { HomeView } from '@/views/home-view'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/app/_/i18n/routing'
import { hasLocale } from 'next-intl'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale))
    return {
      title: '',
    }

  const t = await getTranslations({ locale, namespace: 'Test1' })

  return {
    title: t('title'),
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) return notFound()

  setRequestLocale(locale)

  // return <>{t('title')}</>
  return <HomeView />
}
