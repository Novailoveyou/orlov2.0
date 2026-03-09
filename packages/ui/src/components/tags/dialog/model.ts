import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type dialogVariants } from './utils'
import { DIALOG_TAG } from './constants'

export type DialogProps = AsChildProp &
  VariantProps<typeof dialogVariants> &
  ComponentProps<typeof DIALOG_TAG>
