import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type figureVariants } from './utils'
import { FIGURE_TAG } from './constants'

export type FigureProps = AsChildProp &
  VariantProps<typeof figureVariants> &
  ComponentProps<typeof FIGURE_TAG>
