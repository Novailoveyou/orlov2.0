import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sampVariants } from './utils'
import { SAMP_TAG } from './constants'

export type SampProps = AsChildProp &
  VariantProps<typeof sampVariants> &
  ComponentProps<typeof SAMP_TAG>
