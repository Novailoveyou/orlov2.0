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
import { YandexMetrika } from '@/shared/components/yandex-metrika'
import { UTMs } from '@/shared/components/utms'
import { NextLoader } from '@/shared/components/next-topbar'
import { PullToRefresh } from '@/shared/components/pull-to-refresh'
import { Toaster } from '@/shared/components/sonner'
import { GoogleTagManager } from '@/shared/components/google-tag-manager'

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
      <GoogleTagManager />
      <Body>
        {/* TODO: add timezone */}
        <NextIntlClientProvider locale={locale}>
          <StoreProvider>
            <SWRConfig>
              <ThemeProvider>
                <Container>
                  <WebVitals />
                  <PullToRefresh>
                    <Header />
                    <Main>{children}</Main>
                    <Footer />
                  </PullToRefresh>
                  {dialog}
                  <NavigationMenu />
                </Container>
                <Toaster />
                <NextLoader />
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
