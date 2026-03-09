import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type uVariants } from './utils'
import { U_TAG } from './constants'

export type UProps = AsChildProp &
  VariantProps<typeof uVariants> &
  ComponentProps<typeof U_TAG>
