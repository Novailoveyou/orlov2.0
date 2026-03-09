import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type bodyVariants } from './utils'
import { BODY_TAG } from './constants'

type BodyBaseProps = ComponentProps<typeof BODY_TAG>

export type BodyProps = AsChildProp &
  VariantProps<typeof bodyVariants> &
  BodyBaseProps
