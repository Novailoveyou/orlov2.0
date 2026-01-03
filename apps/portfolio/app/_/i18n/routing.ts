import { defineRouting } from 'next-intl/routing'
import { LOCALE_COOKIE_NAME, ONE_YEAR } from '@/shared/constants/client'

export const routing = defineRouting({
  locales: [
    'en', // English
    'zh', // Mandarin Chinese
    'hi', // Hindi
    'es', // Spanish
    'fr', // French
    'ar', // Arabic
    'bn', // Bengali
    'pt', // Portuguese
    'ru', // Russian
    'ur', // Urdu
    'id', // Indonesian
    'de', // German
    'ja', // Japanese
    'pcm', // Nigerian Pidgin
    'mr', // Marathi
    'te', // Telugu
    'tr', // Turkish
    'ta', // Tamil
    'yue', // Cantonese (Yue Chinese)
    'vi', // Vietnamese
    'la', // Latin
    'kk', // Kazakh
    'uz', // Uzbek
    'eo', // Esperanto
    'egz', // English GenZ Slang
    'let', // Leet Speak
    'sov', // Soviet language
    'orv', // Old East Slavic language
    'dov', // Dovahzul (Dragon Language)
    'elv', // Elvish (Quenya)
    'sim', // Simlish (Sim Language)
    'nav', // Na'vi (Avatar Language)
    'kli', // Klingon (Star Trek Language)
    'sss', // Parsel Tongue (Harry Potter Language)
  ],
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
    '/lead': {
      ru: '/zayavka',
    },
    '/terms': {
      ru: '/uslovija-ispolzovanija',
    },
    '/privacy': {
      ru: '/politika-konfidentsialnosti',
    },
    // '/news/[articleSlug]': {
    //   de: '/neuigkeiten/[articleSlug]',
    // },
    // '/categories/[...slug]': {
    //   de: '/kategorien/[...slug]',
    // },
  },
})
