import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type spanVariants } from './utils'
import { SPAN_TAG } from './constants'

type SpanBaseProps = ComponentProps<typeof SPAN_TAG>

export type SpanProps = AsChildProp &
  VariantProps<typeof spanVariants> &
  SpanBaseProps
