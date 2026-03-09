import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type brVariants } from './utils'
import { BR_TAG } from './constants'

export type BrProps = AsChildProp &
  VariantProps<typeof brVariants> &
  ComponentProps<typeof BR_TAG>
