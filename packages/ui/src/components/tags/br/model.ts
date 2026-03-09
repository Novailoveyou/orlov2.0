import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type brVariants } from './utils'
import { BR_TAG } from './constants'

type BrBaseProps = ComponentProps<typeof BR_TAG>

export type BrProps = AsChildProp &
  VariantProps<typeof brVariants> &
  BrBaseProps
