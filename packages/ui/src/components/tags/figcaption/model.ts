import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type figcaptionVariants } from './utils'
import { FIGCAPTION_TAG } from './constants'

type FigcaptionBaseProps = ComponentProps<typeof FIGCAPTION_TAG>

export type FigcaptionProps = AsChildProp &
  VariantProps<typeof figcaptionVariants> &
  FigcaptionBaseProps
