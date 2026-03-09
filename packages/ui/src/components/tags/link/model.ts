import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type linkVariants } from './utils'
import { LINK_TAG } from './constants'

type LinkBaseProps = ComponentProps<typeof LINK_TAG>

export type LinkProps = AsChildProp &
  VariantProps<typeof linkVariants> &
  LinkBaseProps
