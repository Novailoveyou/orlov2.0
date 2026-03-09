import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type textareaVariants } from './utils'
import { TEXTAREA_TAG } from './constants'

type TextareaBaseProps = ComponentProps<typeof TEXTAREA_TAG>

export type TextareaProps = AsChildProp &
  VariantProps<typeof textareaVariants> &
  TextareaBaseProps
