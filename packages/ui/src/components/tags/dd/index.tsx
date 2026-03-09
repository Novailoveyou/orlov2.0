import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DD_TAG } from './constants'
import { ddVariants } from './utils'
import { DdProps } from './model'

/**
 * @description <Dd> component to display <dd>
 * @remarks
 * The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
 * @example
 * ```tsx
 * const Definition = () => <Dd>Definition of the term</Dd>
 * ```
 */
export function Dd({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DdProps): JSX.Element {
  const Comp = asChild ? Slot : DD_TAG

  return (
    <Comp
      data-slot={DD_TAG}
      ref={ref}
      className={cn(ddVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
