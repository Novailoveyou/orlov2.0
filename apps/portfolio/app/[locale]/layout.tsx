import 'server-only'

import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import { routing } from '@/app/_/i18n/routing'
import { StoreProvider } from '@/app/_/store/provider'
import { YandexMetrika } from '@/shared/yandex-metrika'
import { Container } from '@/shared/components/container'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { NavigationMenu } from '@/features/navigation-menu'
import { Main } from '@/shared/components/main'
import { ThemeProvider } from '@/shared/components/theme-provider'
import { UTMs } from '@/shared/components/utms'
import { SWRConfig } from '@/shared/api'
import { Body } from '@/shared/components/body'
import { Html } from '@/shared/components/html'
import { WebVitals } from '@/shared/components/web-vitals'

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params,
}: LayoutProps<'/[locale]'>): Promise<Metadata> {
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

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) return notFound()

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <Html lang={locale}>
      <Body>
        <NextIntlClientProvider locale={locale} timeZone=''>
          <StoreProvider>
            <SWRConfig>
              <ThemeProvider>
                <WebVitals />
                <NextTopLoader />
                <Container>
                  <Header />
                  <Main>{children}</Main>
                  <Footer />
                  <NavigationMenu />
                </Container>
              </ThemeProvider>
              <Suspense>
                <UTMs />
                <YandexMetrika />
              </Suspense>
            </SWRConfig>
          </StoreProvider>
        </NextIntlClientProvider>
      </Body>
    </Html>
  )
}
