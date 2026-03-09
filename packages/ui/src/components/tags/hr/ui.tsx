import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { HR_TAG } from './constants'
import { hrVariants } from './utils'
import { HrProps } from './model'

/**
 * @description <Hr> component to display <hr> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
 * @remarks
 * The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
export function Hr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: HrProps): JSX.Element {
  const Comp = asChild ? Slot : HR_TAG

  return (
    <Comp
      data-slot={HR_TAG}
      ref={ref}
      className={cn(hrVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
