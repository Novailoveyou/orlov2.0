import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h6Variants } from './utils'
import { H6_TAG } from './constants'

type H6BaseProps = ComponentProps<typeof H6_TAG>

export type H6Props = AsChildProp &
  VariantProps<typeof h6Variants> &
  H6BaseProps
