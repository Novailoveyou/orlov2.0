import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type selectVariants } from './utils'
import { SELECT_TAG } from './constants'

type SelectBaseProps = ComponentProps<typeof SELECT_TAG>

export type SelectProps = AsChildProp &
  VariantProps<typeof selectVariants> &
  SelectBaseProps
