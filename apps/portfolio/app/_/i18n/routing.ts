import { defineRouting } from 'next-intl/routing'
import { LOCALE_COOKIE_NAME, ONE_YEAR } from '@/shared/constants/client'

export const routing = defineRouting({
  locales: ['en', 'ru', 'ar', 'zh', 'tr'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      en: '/en',
      ru: '/ru',
    },
  },
  localeCookie: {
    name: LOCALE_COOKIE_NAME,
    sameSite: 'lax',
    // Expire in one year
    maxAge: ONE_YEAR,
  },
  pathnames: {
    '/': '/',
    '/chat': {
      ru: '/chat',
    },
    '/portfolio': {
      ru: '/portfolio',
    },
    '/skills': {
      ru: '/navyki',
    },
    '/stories': {
      ru: '/istorii',
    },
    // '/news/[articleSlug]': {
    //   de: '/neuigkeiten/[articleSlug]',
    // },
    // '/categories/[...slug]': {
    //   de: '/kategorien/[...slug]',
    // },
  },
})
