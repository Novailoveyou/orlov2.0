import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type formVariants } from './utils'
import { FORM_TAG } from './constants'

export type FormProps = AsChildProp &
  VariantProps<typeof formVariants> &
  ComponentProps<typeof FORM_TAG>
