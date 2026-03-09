import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type outputVariants } from './utils'
import { OUTPUT_TAG } from './constants'

export type OutputProps = AsChildProp &
  VariantProps<typeof outputVariants> &
  ComponentProps<typeof OUTPUT_TAG>
