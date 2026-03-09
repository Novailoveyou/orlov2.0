import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type colgroupVariants } from './utils'
import { COLGROUP_TAG } from './constants'

export type ColgroupProps = AsChildProp &
  VariantProps<typeof colgroupVariants> &
  ComponentProps<typeof COLGROUP_TAG>
