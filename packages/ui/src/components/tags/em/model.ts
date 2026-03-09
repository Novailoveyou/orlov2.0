import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type emVariants } from './utils'
import { EM_TAG } from './constants'

export type EmProps = AsChildProp &
  VariantProps<typeof emVariants> &
  ComponentProps<typeof EM_TAG>
