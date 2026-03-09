import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type varVariants } from './utils'
import { VAR_TAG } from './constants'

type VarBaseProps = ComponentProps<typeof VAR_TAG>

export type VarProps = AsChildProp &
  VariantProps<typeof varVariants> &
  VarBaseProps
