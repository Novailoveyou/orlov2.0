import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type tbodyVariants } from './utils'
import { TBODY_TAG } from './constants'

export type TbodyProps = AsChildProp &
  VariantProps<typeof tbodyVariants> &
  ComponentProps<typeof TBODY_TAG>
