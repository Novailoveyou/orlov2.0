import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type bVariants } from './utils'
import { B_TAG } from './constants'

export type BProps = AsChildProp &
  VariantProps<typeof bVariants> &
  ComponentProps<typeof B_TAG>
