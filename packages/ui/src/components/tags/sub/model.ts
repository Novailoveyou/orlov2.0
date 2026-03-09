import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type subVariants } from './utils'
import { SUB_TAG } from './constants'

type SubBaseProps = ComponentProps<typeof SUB_TAG>

export type SubProps = AsChildProp &
  VariantProps<typeof subVariants> &
  SubBaseProps
