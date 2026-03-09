import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type rpVariants } from './utils'
import { RP_TAG } from './constants'

type RpBaseProps = ComponentProps<typeof RP_TAG>

export type RpProps = AsChildProp &
  VariantProps<typeof rpVariants> &
  RpBaseProps
