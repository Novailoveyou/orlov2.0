'use client'
import 'client-only'

import * as React from 'react'
import { Languages } from 'lucide-react'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { Button } from './shadcnui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './shadcnui/dropdown-menu'
import { Span } from './tags/span'
import { Icon } from './icon'
import { cn } from '../utils'

const LOCALE_MAP = {
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
} as Record<string, string>

const LANGUAGES_MAP = {
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
} as Record<string, string>

/**
 * @description LangToggleDropdown component to toggle between light, dark, and system themes
 */
export const LangToggleDropdown = <Locale extends string>({
  name,
  locales,
  currentLocale,
  setLocale,
}: {
  name: string
  locales: readonly Locale[]
  currentLocale: Locale
  setLocale: (locale: Locale) => void
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Icon
            width='w-[1.2rem]'
            height='h-[1.2rem]'
            Icon={Languages}
            aria-label={name}
          />
          <Span className='ui:sr-only'>{name}</Span>
        </Button>
      </DropdownMenuTrigger>
      {/* TODO: preserve scroll position */}
      <DropdownMenuContent
        className='ui:min-w-auto ui:min-h-40 ui:max-h-[30dvh]'
        align='center'>
        {locales.map(locale => (
          <DropdownMenuItem
            key={locale}
            dir={['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr'}
            onClick={() => setLocale(locale)}
            className={cn(locale === currentLocale && 'ui:font-bold')}>
            {getUnicodeFlagIcon(LOCALE_MAP[locale] || locale)}{' '}
            {LANGUAGES_MAP[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
