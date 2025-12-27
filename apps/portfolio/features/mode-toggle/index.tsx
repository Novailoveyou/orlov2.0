import 'server-only'

import { ModeToggle as ModeToggleBase } from '@/shared/components/mode-toggle'
import { ComponentProps } from 'react'

export const i18n = {
  themeToggle: 'Theme Toggle',
}

export const ModeToggle = (props: ComponentProps<typeof ModeToggleBase>) => {
  return <ModeToggleBase aria-label={i18n.themeToggle} {...props} />
}
