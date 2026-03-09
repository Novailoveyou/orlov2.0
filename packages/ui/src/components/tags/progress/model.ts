import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type progressVariants } from './utils'
import { PROGRESS_TAG } from './constants'

type ProgressBaseProps = ComponentProps<typeof PROGRESS_TAG>

export type ProgressProps = AsChildProp &
  VariantProps<typeof progressVariants> &
  ProgressBaseProps
