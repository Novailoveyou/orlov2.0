import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type legendVariants } from './utils'
import { LEGEND_TAG } from './constants'

type LegendBaseProps = ComponentProps<typeof LEGEND_TAG>

export type LegendProps = AsChildProp &
  VariantProps<typeof legendVariants> &
  LegendBaseProps
