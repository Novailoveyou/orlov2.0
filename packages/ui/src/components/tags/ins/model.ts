import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type insVariants } from './utils'
import { INS_TAG } from './constants'

export type InsProps = AsChildProp &
  VariantProps<typeof insVariants> &
  ComponentProps<typeof INS_TAG>
