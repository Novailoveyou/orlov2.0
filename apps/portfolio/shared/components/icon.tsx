// TODO: figure out server only
import { Icon as IconBase } from '@repo/ui/components/icon'
import { ComponentProps } from 'react'

export const Icon = ({ ...props }: ComponentProps<typeof IconBase>) => (
  <IconBase {...props} />
)
