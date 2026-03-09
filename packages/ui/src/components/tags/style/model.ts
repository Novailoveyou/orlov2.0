import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type styleVariants } from './utils'
import { STYLE_TAG } from './constants'

export type StyleProps = AsChildProp &
  VariantProps<typeof styleVariants> &
  ComponentProps<typeof STYLE_TAG>
