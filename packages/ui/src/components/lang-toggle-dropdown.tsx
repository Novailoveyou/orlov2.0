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

/**
 * @description LangToggleDropdown component to toggle between light, dark, and system themes
 */
export const LangToggleDropdown = <Locale extends string>({
  name,
  locales,
  setLocale,
}: {
  name: string
  locales: readonly Locale[]
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
      <DropdownMenuContent className='ui:min-w-4' align='center'>
        {locales.map(locale => (
          <DropdownMenuItem key={locale} onClick={() => setLocale(locale)}>
            {getUnicodeFlagIcon(
              locale === 'en' ? 'us' : locale === 'zh' ? 'cn' : locale,
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
