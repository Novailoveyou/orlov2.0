import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type colgroupVariants } from './utils'
import { COLGROUP_TAG } from './constants'

type ColgroupBaseProps = ComponentProps<typeof COLGROUP_TAG>

export type ColgroupProps = AsChildProp &
  VariantProps<typeof colgroupVariants> &
  ColgroupBaseProps
