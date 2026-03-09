import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h4Variants } from './utils'
import { H4_TAG } from './constants'

type H4BaseProps = ComponentProps<typeof H4_TAG>

export type H4Props = AsChildProp &
  VariantProps<typeof h4Variants> &
  H4BaseProps
