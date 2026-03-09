import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type tbodyVariants } from './utils'
import { TBODY_TAG } from './constants'

type TbodyBaseProps = ComponentProps<typeof TBODY_TAG>

export type TbodyProps = AsChildProp &
  VariantProps<typeof tbodyVariants> &
  TbodyBaseProps
