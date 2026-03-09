import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type bdiVariants } from './utils'
import { BDI_TAG } from './constants'

export type BdiProps = AsChildProp &
  VariantProps<typeof bdiVariants> &
  ComponentProps<typeof BDI_TAG>
