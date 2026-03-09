import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type varVariants } from './utils'
import { VAR_TAG } from './constants'

export type VarProps = AsChildProp &
  VariantProps<typeof varVariants> &
  ComponentProps<typeof VAR_TAG>
