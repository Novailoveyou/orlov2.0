import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sVariants } from './utils'
import { S_TAG } from './constants'

export type SProps = AsChildProp &
  VariantProps<typeof sVariants> &
  ComponentProps<typeof S_TAG>
