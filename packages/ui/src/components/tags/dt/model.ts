import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type dtVariants } from './utils'
import { DT_TAG } from './constants'

export type DtProps = AsChildProp &
  VariantProps<typeof dtVariants> &
  ComponentProps<typeof DT_TAG>
