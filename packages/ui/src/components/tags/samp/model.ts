import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sampVariants } from './utils'
import { SAMP_TAG } from './constants'

type SampBaseProps = ComponentProps<typeof SAMP_TAG>

export type SampProps = AsChildProp &
  VariantProps<typeof sampVariants> &
  SampBaseProps
