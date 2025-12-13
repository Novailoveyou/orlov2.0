import { Main as MainBase } from '@repo/ui/components/tags/main'
import { ComponentProps } from 'react'

export const Main = ({ ...props }: ComponentProps<typeof MainBase>) => (
  <MainBase {...props} />
)
