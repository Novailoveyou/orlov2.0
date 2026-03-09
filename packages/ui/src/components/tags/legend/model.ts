import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type legendVariants } from './utils'
import { LEGEND_TAG } from './constants'

export type LegendProps = AsChildProp &
  VariantProps<typeof legendVariants> &
  ComponentProps<typeof LEGEND_TAG>
