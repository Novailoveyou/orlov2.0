import { P as PBase } from '@repo/ui/components/tags/p'
import { ComponentProps } from 'react'

export const P = ({ ...props }: ComponentProps<typeof PBase>) => (
  <PBase {...props} />
)
