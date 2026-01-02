import 'server-only'

import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/app/_/i18n/routing'
import { StoreProvider } from '@/app/_/store/provider'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { NavigationMenu } from '@/features/navigation-menu'
import { Html } from '@/shared/components/html'
import { Body } from '@/shared/components/body'
import { Main } from '@/shared/components/main'
import { SWRConfig } from '@/shared/api'
import { Container } from '@/shared/components/container'
import { ThemeProvider } from '@/shared/components/theme-provider'
import { WebVitals } from '@/shared/components/web-vitals'
import { YandexMetrika } from '@/shared/yandex-metrika'
import { UTMs } from '@/shared/components/utms'
import { NextTopLoader } from '@/shared/components/next-topbar'

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
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function RootLayout({
  children,
  params,
  dialog,
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
                  <Main>
                    {children}
                    {dialog}
                  </Main>
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
