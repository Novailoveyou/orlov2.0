import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type tdVariants } from './utils'
import { TD_TAG } from './constants'

type TdBaseProps = ComponentProps<typeof TD_TAG>

export type TdProps = AsChildProp &
  VariantProps<typeof tdVariants> &
  TdBaseProps
