import { Locale } from './types'

export const LOCALE_TO_LANGUAGE_MAP = {
  en: 'English',
  zh: '中文',
  hi: 'हिन्दी',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  bn: 'বাংলা',
  pt: 'Português',
  ru: 'Русский',
  ur: 'اردو',
  id: 'Bahasa Indonesia',
  de: 'Deutsch',
  ja: '日本語',
  pcm: 'Nigerian Pidgin',
  mr: 'मराठी',
  te: 'తెలుగు',
  tr: 'Türkçe',
  ta: 'தமிழ்',
  yue: '粵語',
  vi: 'Tiếng Việt',
  la: 'Latina',
  kk: 'Қазақша',
  uz: 'Oʻzbekcha',
  eo: 'Esperanto',
  egz: 'No Cap Just Vibes',
  let: '1337 5p34k',
  sov: 'Советский',
  orv: 'Рѹсьскъ',
  dov: 'Dovahzul',
  elv: 'Eldarin',
  sim: 'Simlish',
  nav: "Na'vi",
  kli: 'Klingon',
  sss: 'ssss',
} as const

export const LOCALE_TO_COUNTRY_MAP = {
  en: 'us',
  zh: 'cn',
  hi: 'in',
  es: 'es',
  fr: 'fr',
  ar: 'ar',
  bn: 'bd',
  pt: 'pt',
  ru: 'ru',
  ur: 'pk',
  id: 'id',
  de: 'de',
  ja: 'jp',
  pcm: 'ng',
  mr: 'in',
  te: 'in',
  tr: 'tr',
  ta: 'in',
  yue: 'hk',
  vi: 'vn',
  la: 'va',
  kk: 'kz',
  uz: 'uz',
  eo: 'us',
  egz: 'us',
  let: 'us',
  sov: 'ru',
  orv: 'ru',
  dov: 'us',
  elv: 'us',
  sim: 'us',
  nav: 'us',
  kli: 'us',
  sss: 'us',
} as const satisfies Record<Locale, string>

export const FUN_LANGUAGES_ICONS = {
  eo: '🌐',
  dov: '🐉',
  sim: '💎',
  nav: '🧞',
  kli: '🖖',
  sss: '🪄',
  egz: '🗣',
  sov: '🚩',
  orv: '📜',
  elv: '🧝‍♂️',
  let: '💻',
} as const satisfies Record<
  keyof Pick<
    typeof LOCALE_TO_LANGUAGE_MAP,
    | 'eo'
    | 'dov'
    | 'sim'
    | 'nav'
    | 'kli'
    | 'sss'
    | 'egz'
    | 'sov'
    | 'orv'
    | 'elv'
    | 'let'
  >,
  string
>
