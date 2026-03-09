import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type buttonVariants } from './utils'
import { BUTTON_TAG } from './constants'

export type ButtonProps = AsChildProp &
  VariantProps<typeof buttonVariants> &
  ComponentProps<typeof BUTTON_TAG>
