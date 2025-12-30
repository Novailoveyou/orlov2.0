'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { LangToggleDropdown as BaseLangToggleDropdown } from '@repo/ui/components/lang-toggle-dropdown'

export const LangToggleDropdown = <Locale extends string>(
  props: ComponentProps<typeof BaseLangToggleDropdown<Locale>>,
) => {
  return <BaseLangToggleDropdown {...props} />
}
