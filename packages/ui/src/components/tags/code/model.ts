import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type codeVariants } from './utils'
import { CODE_TAG } from './constants'

type CodeBaseProps = ComponentProps<typeof CODE_TAG>

export type CodeProps = AsChildProp &
  VariantProps<typeof codeVariants> &
  CodeBaseProps
