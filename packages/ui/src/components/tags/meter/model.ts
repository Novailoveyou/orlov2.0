import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type meterVariants } from './utils'
import { METER_TAG } from './constants'

export type MeterProps = AsChildProp &
  VariantProps<typeof meterVariants> &
  ComponentProps<typeof METER_TAG>
