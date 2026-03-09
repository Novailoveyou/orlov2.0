import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type baseVariants } from './utils'
import { BASE_TAG } from './constants'

type BaseBaseProps = ComponentProps<typeof BASE_TAG>

export type BaseProps = AsChildProp &
  VariantProps<typeof baseVariants> &
  BaseBaseProps
