import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type wbrVariants } from './utils'
import { WBR_TAG } from './constants'

export type WbrProps = AsChildProp &
  VariantProps<typeof wbrVariants> &
  ComponentProps<typeof WBR_TAG>
