import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type h1Variants } from './utils'
import { H1_TAG } from './constants'

type H1BaseProps = ComponentProps<typeof H1_TAG>

export type H1Props = AsChildProp &
  VariantProps<typeof h1Variants> &
  H1BaseProps
