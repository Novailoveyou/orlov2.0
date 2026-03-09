import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type preVariants } from './utils'
import { PRE_TAG } from './constants'

export type PreProps = AsChildProp &
  VariantProps<typeof preVariants> &
  ComponentProps<typeof PRE_TAG>
