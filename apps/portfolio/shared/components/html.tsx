import 'server-only'

import { Html as HtmlBase } from '@repo/ui/components/tags/html'
import { ComponentProps } from 'react'
import { Poppins, Lato, Cute_Font } from 'next/font/google'
import { cn } from '@/shared/utils'
// import localFont from 'next/font/local'

const poppinsFont = Poppins({
  subsets: ['latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--next-font-poppins',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    'ui-sans-serif',
    '-apple-system',
    'BlinkMacMacSystemFont',
    'Segoe UI',
    'arial',
    'Roboto',
    'Ubuntu',
    'sans-serif',
  ],
  adjustFontFallback: true,
})

const latoFont = Lato({
  subsets: ['latin-ext'],
  weight: ['400'],
  variable: '--next-font-lato',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    'ui-sans-serif',
    '-apple-system',
    'BlinkMacMacSystemFont',
    'Segoe UI',
    'arial',
    'Roboto',
    'Ubuntu',
    'sans-serif',
  ],
  adjustFontFallback: true,
})

const cuteFont = Cute_Font({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--next-font-cute',
  style: 'normal',
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    'ui-sans-serif',
    '-apple-system',
    'BlinkMacMacSystemFont',
    'Segoe UI',
    'arial',
    'Roboto',
    'Ubuntu',
    'sans-serif',
  ],
  adjustFontFallback: true,
})

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
// })

export function Html({
  className,
  lang,
  ...props
}: Omit<ComponentProps<typeof HtmlBase>, 'dir'>) {
  return (
    <HtmlBase
      lang={lang}
      className={cn(
        poppinsFont.variable,
        latoFont.variable,
        cuteFont.variable,
        // 'overscroll-contain',
        className,
      )}
      {...props}
    />
  )
}
