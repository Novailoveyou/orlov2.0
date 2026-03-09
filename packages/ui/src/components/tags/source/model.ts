import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sourceVariants } from './utils'
import { SOURCE_TAG } from './constants'

export type SourceProps = AsChildProp &
  VariantProps<typeof sourceVariants> &
  ComponentProps<typeof SOURCE_TAG>
