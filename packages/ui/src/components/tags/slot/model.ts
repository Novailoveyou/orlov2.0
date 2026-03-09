import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type slotVariants } from './utils'
import { SLOT_TAG } from './constants'

export type SlotProps = AsChildProp &
  VariantProps<typeof slotVariants> &
  ComponentProps<typeof SLOT_TAG>
