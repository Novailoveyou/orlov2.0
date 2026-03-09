import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type canvasVariants } from './utils'
import { CANVAS_TAG } from './constants'

type CanvasBaseProps = ComponentProps<typeof CANVAS_TAG>

export type CanvasProps = AsChildProp &
  VariantProps<typeof canvasVariants> &
  CanvasBaseProps
