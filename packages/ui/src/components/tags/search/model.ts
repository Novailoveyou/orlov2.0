import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type searchVariants } from './utils'
import { SEARCH_TAG } from './constants'

export type SearchProps = AsChildProp &
  VariantProps<typeof searchVariants> &
  ComponentProps<typeof SEARCH_TAG>
