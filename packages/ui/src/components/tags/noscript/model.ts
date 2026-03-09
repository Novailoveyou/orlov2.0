import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type noscriptVariants } from './utils'
import { NOSCRIPT_TAG } from './constants'

export type NoscriptProps = AsChildProp &
  VariantProps<typeof noscriptVariants> &
  ComponentProps<typeof NOSCRIPT_TAG>
