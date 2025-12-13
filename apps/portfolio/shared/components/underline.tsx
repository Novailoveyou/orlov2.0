import { Underline as UnderlineBase } from '@repo/ui/components/underline'
import { ComponentProps } from 'react'

export const Underline = ({
  ...props
}: ComponentProps<typeof UnderlineBase>) => <UnderlineBase {...props} />
