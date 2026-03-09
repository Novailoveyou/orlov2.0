import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type inputVariants } from './utils'
import { INPUT_TAG } from './constants'

type InputBaseProps = ComponentProps<typeof INPUT_TAG>

export type InputProps = AsChildProp &
  VariantProps<typeof inputVariants> &
  InputBaseProps
