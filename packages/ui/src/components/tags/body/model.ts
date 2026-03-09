import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type bodyVariants } from './utils'
import { BODY_TAG } from './constants'

export type BodyProps = AsChildProp &
  VariantProps<typeof bodyVariants> &
  ComponentProps<typeof BODY_TAG>
