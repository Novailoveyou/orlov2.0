import 'server-only'

import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { YandexMetrika } from '@/shared/yandex-metrika'
import { Container } from '@/shared/components/container'
import { StoreProvider } from '@/app/store'
import { leadSlice } from '@/entities/lead/store'
import { Footer } from '@/widgets/Footer'
import { NavMenu } from '@/shared/components/nav-menu'
import { Header } from '@/shared/components/header'
import { Main } from '@/shared/components/main'
import { ThemeProvider } from '@/shared/components/theme-provider'
import { UTMs } from '@/shared/components/utms'
import { SWRConfig } from '@/shared/api'
import { Body } from '@/shared/components/body'
import { Html } from '@/shared/components/html'
import { i18n } from './_constants/en'

export const metadata: Metadata = {
  title: i18n.title,
  description: i18n.description,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <Html>
      <Body>
        <StoreProvider slices={[leadSlice]}>
          <SWRConfig>
            <ThemeProvider>
              <Container>
                <Header />
                <Main>{children}</Main>
                <Footer />
                <NavMenu />
              </Container>
            </ThemeProvider>
            <Suspense>
              <UTMs />
              <YandexMetrika />
            </Suspense>
          </SWRConfig>
        </StoreProvider>
      </Body>
    </Html>
  )
}
