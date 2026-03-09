import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type optionVariants } from './utils'
import { OPTION_TAG } from './constants'

export type OptionProps = AsChildProp &
  VariantProps<typeof optionVariants> &
  ComponentProps<typeof OPTION_TAG>
