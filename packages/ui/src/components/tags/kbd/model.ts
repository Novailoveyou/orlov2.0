import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type kbdVariants } from './utils'
import { KBD_TAG } from './constants'

export type KbdProps = AsChildProp &
  VariantProps<typeof kbdVariants> &
  ComponentProps<typeof KBD_TAG>
