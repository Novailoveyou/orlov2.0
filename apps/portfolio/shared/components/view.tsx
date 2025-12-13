import { View as ViewBase } from '@repo/ui/components/view'
import { ComponentProps } from 'react'

export const View = ({ ...props }: ComponentProps<typeof ViewBase>) => (
  <ViewBase {...props} />
)
