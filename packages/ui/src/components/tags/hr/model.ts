import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type hrVariants } from './utils'
import { HR_TAG } from './constants'

export type HrProps = AsChildProp &
  VariantProps<typeof hrVariants> &
  ComponentProps<typeof HR_TAG>
