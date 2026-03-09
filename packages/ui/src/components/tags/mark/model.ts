import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type markVariants } from './utils'
import { MARK_TAG } from './constants'

type MarkBaseProps = ComponentProps<typeof MARK_TAG>

export type MarkProps = AsChildProp &
  VariantProps<typeof markVariants> &
  MarkBaseProps
