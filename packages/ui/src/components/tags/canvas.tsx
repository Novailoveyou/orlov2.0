import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'canvas'

export const canvasVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: '',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type CanvasProps = AsChildProp &
  VariantProps<typeof canvasVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(canvasVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
