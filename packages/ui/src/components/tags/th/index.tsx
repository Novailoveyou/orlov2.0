import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TH_TAG } from './constants'
import { thVariants } from './utils'
import { ThProps } from './model'

/**
 * @description <Th> component to display <th> tag
 * @remarks
 * The <th> HTML element defines a cell as the header of a group of table cells and may be used as a child of the <tr> element. The exact nature of this group is defined by the scope and headers attributes.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 */
export function Th({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ThProps): JSX.Element {
  const Comp = asChild ? Slot : TH_TAG

  return (
    <Comp
      data-slot={TH_TAG}
      ref={ref}
      className={cn(thVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
