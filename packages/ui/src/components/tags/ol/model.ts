import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type olVariants } from './utils'
import { OL_TAG } from './constants'

export type OlProps = AsChildProp &
  VariantProps<typeof olVariants> &
  ComponentProps<typeof OL_TAG>
