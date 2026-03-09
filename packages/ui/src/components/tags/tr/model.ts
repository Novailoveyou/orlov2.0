import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type trVariants } from './utils'
import { TR_TAG } from './constants'

type TrBaseProps = ComponentProps<typeof TR_TAG>

export type TrProps = AsChildProp &
  VariantProps<typeof trVariants> &
  TrBaseProps
