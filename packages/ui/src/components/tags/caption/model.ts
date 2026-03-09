import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type captionVariants } from './utils'
import { CAPTION_TAG } from './constants'

export type CaptionProps = AsChildProp &
  VariantProps<typeof captionVariants> &
  ComponentProps<typeof CAPTION_TAG>
