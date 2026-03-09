import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type ddVariants } from './utils'
import { DD_TAG } from './constants'

export type DdProps = AsChildProp &
  VariantProps<typeof ddVariants> &
  ComponentProps<typeof DD_TAG>
