// TODO: figure out server only

import { Span as SpanBase } from '@repo/ui/components/tags/span'
import { ComponentProps } from 'react'

export const Span = ({ ...props }: ComponentProps<typeof SpanBase>) => (
  <SpanBase {...props} />
)
