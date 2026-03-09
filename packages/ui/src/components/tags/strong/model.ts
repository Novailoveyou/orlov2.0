import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type strongVariants } from './utils'
import { STRONG_TAG } from './constants'

type StrongBaseProps = ComponentProps<typeof STRONG_TAG>

export type StrongProps = AsChildProp &
  VariantProps<typeof strongVariants> &
  StrongBaseProps
