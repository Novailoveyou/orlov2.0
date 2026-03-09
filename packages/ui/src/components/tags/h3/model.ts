import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h3Variants } from './utils'
import { H3_TAG } from './constants'

export type H3Props = AsChildProp &
  VariantProps<typeof h3Variants> &
  ComponentProps<typeof H3_TAG>
