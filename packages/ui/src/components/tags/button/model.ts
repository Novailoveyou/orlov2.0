import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type buttonVariants } from './utils'
import { BUTTON_TAG } from './constants'

type ButtonBaseProps = ComponentProps<typeof BUTTON_TAG>

export type ButtonProps = AsChildProp &
  VariantProps<typeof buttonVariants> &
  ButtonBaseProps
