import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type rtVariants } from './utils'
import { RT_TAG } from './constants'

export type RtProps = AsChildProp &
  VariantProps<typeof rtVariants> &
  ComponentProps<typeof RT_TAG>
