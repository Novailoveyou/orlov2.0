import 'server-only'

import { Ul as UlBase } from '@repo/ui/components/tags/list'
import { ComponentProps } from 'react'

export const Ul = ({ ...props }: ComponentProps<typeof UlBase>) => (
  <UlBase {...props} />
)
