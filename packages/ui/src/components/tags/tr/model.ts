import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type trVariants } from './utils'
import { TR_TAG } from './constants'

export type TrProps = AsChildProp &
  VariantProps<typeof trVariants> &
  ComponentProps<typeof TR_TAG>
