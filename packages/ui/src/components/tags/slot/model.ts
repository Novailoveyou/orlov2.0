import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type slotVariants } from './utils'
import { SLOT_TAG } from './constants'

type SlotBaseProps = ComponentProps<typeof SLOT_TAG>

export type SlotProps = AsChildProp &
  VariantProps<typeof slotVariants> &
  SlotBaseProps
