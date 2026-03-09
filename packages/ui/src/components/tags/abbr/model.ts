import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type abbrVariants } from './utils'
import { ABBR_TAG } from './constants'

type AbbrBaseProps = ComponentProps<typeof ABBR_TAG>

export type AbbrProps = AsChildProp &
  VariantProps<typeof abbrVariants> &
  AbbrBaseProps
