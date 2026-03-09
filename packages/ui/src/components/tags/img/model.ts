import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type imgVariants } from './utils'
import { IMG_TAG } from './constants'

export type ImgProps = AsChildProp &
  VariantProps<typeof imgVariants> &
  ComponentProps<typeof IMG_TAG>
