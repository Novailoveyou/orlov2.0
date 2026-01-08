'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { LangToggleDropdown as BaseLangToggleDropdown } from '@repo/ui/components/lang-toggle-dropdown/index'
import type { Locale } from '@repo/ui/components/lang-toggle-dropdown/types'
import { LOCALE_TO_COUNTRY_MAP } from '@repo/ui/components/lang-toggle-dropdown/constants'

export { LOCALE_TO_COUNTRY_MAP }

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
