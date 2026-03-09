import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type canvasVariants } from './utils'
import { CANVAS_TAG } from './constants'

export type CanvasProps = AsChildProp &
  VariantProps<typeof canvasVariants> &
  ComponentProps<typeof CANVAS_TAG>
