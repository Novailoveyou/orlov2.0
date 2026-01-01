'use client'
import 'client-only'

// TODO: make this component better

import * as React from 'react'
import { Languages } from 'lucide-react'
import LocalePolyfill from 'intl-locale-textinfo-polyfill'
// TODO: optimize this
import countryFlags from 'country-flag-icons/react/3x2'
import { Button } from './shadcnui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './shadcnui/dropdown-menu'
import { Span } from './tags/span'
import { Icon } from './icon'
import { cn, toUpperCase } from '../utils'

const LOCALE_TO_LANGUAGE_MAP = {
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
  sov: 'Советский',
  orv: 'Рѹсьскъ',
  dov: 'Dovahzul',
  sim: 'Simlish',
  nav: "Na'vi",
  kli: 'Klingon',
  sss: 'ssss',
} as const

export type Locale = keyof typeof LOCALE_TO_LANGUAGE_MAP

const LOCALE_TO_COUNTRY_MAP = {
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
  eo: 'eo',
  egz: 'us',
  sov: 'sov',
  orv: 'orv',
  dov: 'dov',
  sim: 'sim',
  nav: 'nav',
  kli: 'kli',
  sss: 'par',
} as const satisfies Record<Locale, string>

const FUN_LANGUAGES_ICONS = {
  eo: '🌐',
  dov: '🐉',
  sim: '💎',
  nav: '🧞',
  kli: '🖖',
  sss: '🪄',
  egz: '🗣',
  sov: '🚩',
  orv: '📜',
} as const satisfies Record<
  keyof Pick<
    typeof LOCALE_TO_LANGUAGE_MAP,
    'eo' | 'dov' | 'sim' | 'nav' | 'kli' | 'sss' | 'egz' | 'sov' | 'orv'
  >,
  string
>

/**
 * @description LangToggleDropdown component to toggle between light, dark, and system themes
 */
export const LangToggleDropdown = <TLocale extends Locale>({
  name,
  locales,
  currentLocale,
  setLocale,
  iconProps,
  dropdownMenuItemProps,
}: {
  name: string
  locales: readonly TLocale[]
  currentLocale: TLocale
  setLocale: (locale: TLocale) => void
  iconProps?: React.ComponentProps<typeof Icon>
  dropdownMenuItemProps?: Omit<
    React.ComponentProps<typeof DropdownMenuItem>,
    'dir'
  >
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Icon
            {...(iconProps || {})}
            width={iconProps?.width || 'w-[1.2rem]'}
            height={iconProps?.height || 'h-[1.2rem]'}
            Icon={iconProps?.Icon || Languages}
            aria-label={iconProps?.['aria-label'] || name}
          />
          <Span className='ui:sr-only'>{name}</Span>
        </Button>
      </DropdownMenuTrigger>
      {/* TODO: preserve scroll position */}
      <DropdownMenuContent
        className='ui:min-w-auto ui:min-h-40 ui:max-h-[30dvh]'
        align='center'>
        {locales.map(locale => {
          const country = toUpperCase(LOCALE_TO_COUNTRY_MAP[locale])

          const { direction: dir } = new LocalePolyfill(locale).getTextInfo()

          return (
            <DropdownMenuItem
              key={locale}
              dir={dir}
              {...dropdownMenuItemProps}
              onClick={props => {
                setLocale(locale)
                return dropdownMenuItemProps?.onClick?.(props)
              }}
              className={cn(
                locale === currentLocale && 'ui:font-bold',
                dropdownMenuItemProps?.className,
              )}>
              {locale in FUN_LANGUAGES_ICONS ? (
                <>
                  {
                    FUN_LANGUAGES_ICONS[
                      locale as keyof typeof FUN_LANGUAGES_ICONS
                    ]
                  }
                </>
              ) : country in countryFlags ? (
                <Icon
                  width='w-[1.2rem]'
                  height='h-[1.2rem]'
                  Icon={props =>
                    countryFlags[country as keyof typeof countryFlags](props)
                  }
                  aria-label={LOCALE_TO_LANGUAGE_MAP[locale] || locale}
                />
              ) : (
                <>🏳️</>
              )}{' '}
              {LOCALE_TO_LANGUAGE_MAP[locale] || locale}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
