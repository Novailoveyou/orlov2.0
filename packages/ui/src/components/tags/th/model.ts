import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type thVariants } from './utils'
import { TH_TAG } from './constants'

type ThBaseProps = ComponentProps<typeof TH_TAG>

export type ThProps = AsChildProp &
  VariantProps<typeof thVariants> &
  ThBaseProps
