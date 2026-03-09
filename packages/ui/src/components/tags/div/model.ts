import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type divVariants } from './utils'
import { DIV_TAG } from './constants'

export type DivProps = AsChildProp &
  VariantProps<typeof divVariants> &
  ComponentProps<typeof DIV_TAG>
