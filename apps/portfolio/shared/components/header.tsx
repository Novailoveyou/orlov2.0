import 'server-only'

import { Header as HeaderBase } from '@repo/ui/components/tags/header'
import { ComponentProps } from 'react'

export const Header = (props: ComponentProps<typeof HeaderBase>) => {
  return <HeaderBase {...props} />
}
