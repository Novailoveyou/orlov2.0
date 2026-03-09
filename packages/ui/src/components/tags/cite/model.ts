import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type citeVariants } from './utils'
import { CITE_TAG } from './constants'

export type CiteProps = AsChildProp &
  VariantProps<typeof citeVariants> &
  ComponentProps<typeof CITE_TAG>
