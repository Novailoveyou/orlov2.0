import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type noscriptVariants } from './utils'
import { NOSCRIPT_TAG } from './constants'

type NoscriptBaseProps = ComponentProps<typeof NOSCRIPT_TAG>

export type NoscriptProps = AsChildProp &
  VariantProps<typeof noscriptVariants> &
  NoscriptBaseProps
