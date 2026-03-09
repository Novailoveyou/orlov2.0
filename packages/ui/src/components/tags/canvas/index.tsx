import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { CANVAS_TAG } from './constants'
import { canvasVariants } from './utils'
import { CanvasProps } from './model'

/**
 * @description <Canvas> component to display <canvas> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
 * @remarks
 * Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.
 */
export function Canvas({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: CanvasProps): JSX.Element {
  const Comp = asChild ? Slot : CANVAS_TAG

  return (
    <Comp
      data-slot={CANVAS_TAG}
      ref={ref}
      className={cn(canvasVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
