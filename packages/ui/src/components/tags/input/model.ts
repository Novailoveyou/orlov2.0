import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type inputVariants } from './utils'
import { INPUT_TAG } from './constants'

export type InputProps = AsChildProp &
  VariantProps<typeof inputVariants> &
  ComponentProps<typeof INPUT_TAG>
