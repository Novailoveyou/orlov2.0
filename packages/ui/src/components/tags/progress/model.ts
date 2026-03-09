import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type progressVariants } from './utils'
import { PROGRESS_TAG } from './constants'

export type ProgressProps = AsChildProp &
  VariantProps<typeof progressVariants> &
  ComponentProps<typeof PROGRESS_TAG>
