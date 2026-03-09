import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DETAILS_TAG } from './constants'
import { detailsVariants } from './utils'
import { DetailsProps } from './model'

/**
 * @description <Details> component to display <details>
 * @remarks
 * The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.
 * A summary or label must be provided using the <summary> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 * @example
 * ```tsx
 * const Disclosure = () => <Details><summary>Click to expand</summary>Hidden content</Details>
 * ```
 */
export function Details({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DetailsProps): JSX.Element {
  const Comp = asChild ? Slot : DETAILS_TAG

  return (
    <Comp
      data-slot={DETAILS_TAG}
      ref={ref}
      className={cn(detailsVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
