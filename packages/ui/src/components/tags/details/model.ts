import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type detailsVariants } from './utils'
import { DETAILS_TAG } from './constants'

export type DetailsProps = AsChildProp &
  VariantProps<typeof detailsVariants> &
  ComponentProps<typeof DETAILS_TAG>
