import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type dlVariants } from './utils'
import { DL_TAG } from './constants'

export type DlProps = AsChildProp &
  VariantProps<typeof dlVariants> &
  ComponentProps<typeof DL_TAG>
