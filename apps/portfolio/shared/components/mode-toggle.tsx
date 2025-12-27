import 'server-only'

import { ModeToggle as ModeToggleBase } from '@repo/ui/components/mode-toggle'
import { ComponentProps } from 'react'

export const ModeToggle = (props: ComponentProps<typeof ModeToggleBase>) => {
  return <ModeToggleBase {...props} />
}
