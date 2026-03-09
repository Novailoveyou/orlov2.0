import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type ulVariants } from './utils'
import { UL_TAG } from './constants'

type UlBaseProps = ComponentProps<typeof UL_TAG>

export type UlProps = AsChildProp &
  VariantProps<typeof ulVariants> &
  UlBaseProps
