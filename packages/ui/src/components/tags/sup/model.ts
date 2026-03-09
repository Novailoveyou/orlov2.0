import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type supVariants } from './utils'
import { SUP_TAG } from './constants'

type SupBaseProps = ComponentProps<typeof SUP_TAG>

export type SupProps = AsChildProp &
  VariantProps<typeof supVariants> &
  SupBaseProps
