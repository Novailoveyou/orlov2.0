import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type markVariants } from './utils'
import { MARK_TAG } from './constants'

export type MarkProps = AsChildProp &
  VariantProps<typeof markVariants> &
  ComponentProps<typeof MARK_TAG>
