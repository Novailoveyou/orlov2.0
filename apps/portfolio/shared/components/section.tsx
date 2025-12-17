import 'server-only'

import { Section as SectionBase } from '@repo/ui/components/tags/section'
import { ComponentProps } from 'react'

export const Section = ({ ...props }: ComponentProps<typeof SectionBase>) => (
  <SectionBase {...props} />
)
