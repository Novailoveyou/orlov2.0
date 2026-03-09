import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type figcaptionVariants } from './utils'
import { FIGCAPTION_TAG } from './constants'

export type FigcaptionProps = AsChildProp &
  VariantProps<typeof figcaptionVariants> &
  ComponentProps<typeof FIGCAPTION_TAG>
