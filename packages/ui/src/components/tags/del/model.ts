import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type delVariants } from './utils'
import { DEL_TAG } from './constants'

export type DelProps = AsChildProp &
  VariantProps<typeof delVariants> &
  ComponentProps<typeof DEL_TAG>
