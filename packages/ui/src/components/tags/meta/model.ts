import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type metaVariants } from './utils'
import { META_TAG } from './constants'

export type MetaProps = AsChildProp &
  VariantProps<typeof metaVariants> &
  ComponentProps<typeof META_TAG>
