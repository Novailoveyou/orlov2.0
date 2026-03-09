import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type detailsVariants } from './utils'
import { DETAILS_TAG } from './constants'

type DetailsBaseProps = ComponentProps<typeof DETAILS_TAG>

export type DetailsProps = AsChildProp &
  VariantProps<typeof detailsVariants> &
  DetailsBaseProps
