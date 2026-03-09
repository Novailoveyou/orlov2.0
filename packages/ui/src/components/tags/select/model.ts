import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type selectVariants } from './utils'
import { SELECT_TAG } from './constants'

export type SelectProps = AsChildProp &
  VariantProps<typeof selectVariants> &
  ComponentProps<typeof SELECT_TAG>
