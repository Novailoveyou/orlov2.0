import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type mainVariants } from './utils'
import { MAIN_TAG } from './constants'

export type MainProps = AsChildProp &
  VariantProps<typeof mainVariants> &
  ComponentProps<typeof MAIN_TAG>
