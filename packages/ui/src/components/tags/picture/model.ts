import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type pictureVariants } from './utils'
import { PICTURE_TAG } from './constants'

export type PictureProps = AsChildProp &
  VariantProps<typeof pictureVariants> &
  ComponentProps<typeof PICTURE_TAG>
