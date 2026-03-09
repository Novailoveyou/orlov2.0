import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h1Variants } from './utils'
import { H1_TAG } from './constants'

export type H1Props = AsChildProp &
  VariantProps<typeof h1Variants> &
  ComponentProps<typeof H1_TAG>
