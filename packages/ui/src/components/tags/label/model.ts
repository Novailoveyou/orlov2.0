import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type labelVariants } from './utils'
import { LABEL_TAG } from './constants'

type LabelBaseProps = ComponentProps<typeof LABEL_TAG>

export type LabelProps = AsChildProp &
  VariantProps<typeof labelVariants> &
  LabelBaseProps
