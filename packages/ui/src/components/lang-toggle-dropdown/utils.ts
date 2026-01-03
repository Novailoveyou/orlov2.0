import { Locale } from './types'

const RUSSIAN_LOCALES = ['ru', 'sov', 'orv'] as const satisfies Locale[]

export const isRussianLocale = (locale: Locale) =>
  RUSSIAN_LOCALES.includes(locale as (typeof RUSSIAN_LOCALES)[number])
