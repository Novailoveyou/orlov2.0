import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type thVariants } from './utils'
import { TH_TAG } from './constants'

export type ThProps = AsChildProp &
  VariantProps<typeof thVariants> &
  ComponentProps<typeof TH_TAG>
