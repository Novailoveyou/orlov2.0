import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type hrVariants } from './utils'
import { HR_TAG } from './constants'

type HrBaseProps = ComponentProps<typeof HR_TAG>

export type HrProps = AsChildProp &
  VariantProps<typeof hrVariants> &
  HrBaseProps
