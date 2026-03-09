import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type linkVariants } from './utils'
import { LINK_TAG } from './constants'

export type LinkProps = AsChildProp &
  VariantProps<typeof linkVariants> &
  ComponentProps<typeof LINK_TAG>
