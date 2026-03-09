import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type labelVariants } from './utils'
import { LABEL_TAG } from './constants'

export type LabelProps = AsChildProp &
  VariantProps<typeof labelVariants> &
  ComponentProps<typeof LABEL_TAG>
