import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DIV_TAG } from './constants'
import { divVariants } from './utils'
import { DivProps } from './model'

/**
 * @description <Div> component to display <div>
 * @remarks
 * The <div> HTML element is the generic container for flow content.
 * It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like flexbox is applied to its parent element).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
 * @example
 * ```tsx
 * const Container = () => <Div>Content goes here</Div>
 * ```
 */
export function Div({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DivProps): JSX.Element {
  const Comp = asChild ? Slot : DIV_TAG

  return (
    <Comp
      data-slot={DIV_TAG}
      ref={ref}
      className={cn(divVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
