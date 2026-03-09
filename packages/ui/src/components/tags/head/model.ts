import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type headVariants } from './utils'
import { HEAD_TAG } from './constants'

type HeadBaseProps = ComponentProps<typeof HEAD_TAG>

export type HeadProps = AsChildProp &
  VariantProps<typeof headVariants> &
  HeadBaseProps
