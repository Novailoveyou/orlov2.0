import 'server-only'

import { Image as ImageBase } from '@repo/ui/components/image'
import { ComponentProps } from 'react'

export const Image = ({ ...props }: ComponentProps<typeof ImageBase>) => (
  <ImageBase {...props} />
)
