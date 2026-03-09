import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'div'

export const divVariants = cva('', {
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

type DivProps = AsChildProp &
  VariantProps<typeof divVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Div> component to display <div> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
 * @remarks
 * The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
 */
export function Div({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DivProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(divVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
