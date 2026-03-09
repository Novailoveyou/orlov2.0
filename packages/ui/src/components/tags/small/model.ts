import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type smallVariants } from './utils'
import { SMALL_TAG } from './constants'

export type SmallProps = AsChildProp &
  VariantProps<typeof smallVariants> &
  ComponentProps<typeof SMALL_TAG>
