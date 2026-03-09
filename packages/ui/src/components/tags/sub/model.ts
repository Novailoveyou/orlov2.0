import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type subVariants } from './utils'
import { SUB_TAG } from './constants'

export type SubProps = AsChildProp &
  VariantProps<typeof subVariants> &
  ComponentProps<typeof SUB_TAG>
