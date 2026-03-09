import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type rtVariants } from './utils'
import { RT_TAG } from './constants'

type RtBaseProps = ComponentProps<typeof RT_TAG>

export type RtProps = AsChildProp &
  VariantProps<typeof rtVariants> &
  RtBaseProps
