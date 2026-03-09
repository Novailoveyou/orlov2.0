import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type objectVariants } from './utils'
import { OBJECT_TAG } from './constants'

export type ObjectProps = AsChildProp &
  VariantProps<typeof objectVariants> &
  ComponentProps<typeof OBJECT_TAG>
