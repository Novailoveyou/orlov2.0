import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type ulVariants } from './utils'
import { UL_TAG } from './constants'

export type UlProps = AsChildProp &
  VariantProps<typeof ulVariants> &
  ComponentProps<typeof UL_TAG>
