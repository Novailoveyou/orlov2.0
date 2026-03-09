import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type dfnVariants } from './utils'
import { DFN_TAG } from './constants'

type DfnBaseProps = ComponentProps<typeof DFN_TAG>

export type DfnProps = AsChildProp &
  VariantProps<typeof dfnVariants> &
  DfnBaseProps
