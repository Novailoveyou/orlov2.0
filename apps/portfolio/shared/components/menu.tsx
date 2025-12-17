// TODO: figure out server only

import { Menu as MenuBase } from '@repo/ui/components/tags/menu'
import { ComponentProps } from 'react'

export const Menu = ({ ...props }: ComponentProps<typeof MenuBase>) => (
  <MenuBase {...props} />
)
