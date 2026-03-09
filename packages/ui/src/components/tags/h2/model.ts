import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h2Variants } from './utils'
import { H2_TAG } from './constants'

type H2BaseProps = ComponentProps<typeof H2_TAG>

export type H2Props = AsChildProp &
  VariantProps<typeof h2Variants> &
  H2BaseProps
