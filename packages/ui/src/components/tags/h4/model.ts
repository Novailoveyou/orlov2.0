import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h4Variants } from './utils'
import { H4_TAG } from './constants'

export type H4Props = AsChildProp &
  VariantProps<typeof h4Variants> &
  ComponentProps<typeof H4_TAG>
