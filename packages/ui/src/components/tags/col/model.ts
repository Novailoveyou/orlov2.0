import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type colVariants } from './utils'
import { COL_TAG } from './constants'

type ColBaseProps = ComponentProps<typeof COL_TAG>

export type ColProps = AsChildProp &
  VariantProps<typeof colVariants> &
  ColBaseProps
