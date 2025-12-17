import 'server-only'

import { Footer as FooterBase } from '@repo/ui/components/tags/footer'
import { ComponentProps } from 'react'

export const Footer = ({ ...props }: ComponentProps<typeof FooterBase>) => (
  <FooterBase {...props} />
)
