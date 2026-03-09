import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type bdoVariants } from './utils'
import { BDO_TAG } from './constants'

type BdoBaseProps = ComponentProps<typeof BDO_TAG>

export type BdoProps = AsChildProp &
  VariantProps<typeof bdoVariants> &
  BdoBaseProps
