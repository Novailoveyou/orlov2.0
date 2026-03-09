import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type tfootVariants } from './utils'
import { TFOOT_TAG } from './constants'

export type TfootProps = AsChildProp &
  VariantProps<typeof tfootVariants> &
  ComponentProps<typeof TFOOT_TAG>
