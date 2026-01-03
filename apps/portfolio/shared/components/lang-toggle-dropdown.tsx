'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { LangToggleDropdown as BaseLangToggleDropdown } from '@repo/ui/components/lang-toggle-dropdown'
import type { Locale } from '@repo/ui/components/lang-toggle-dropdown/types'

export const LangToggleDropdown = <TLocale extends Locale>(
  props: ComponentProps<typeof BaseLangToggleDropdown<TLocale>>,
) => {
  return (
    <BaseLangToggleDropdown
      dropdownMenuItemProps={{
        className: 'font-poppins',
      }}
      {...props}
    />
  )
}
