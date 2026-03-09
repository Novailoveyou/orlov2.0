import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { COLGROUP_TAG } from './constants'
import { colgroupVariants } from './utils'
import { ColgroupProps } from './model'

/**
 * @description <Colgroup> component to display <colgroup> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 * @remarks
 * The <colgroup> HTML element defines a group of columns within a table.
 */
export function Colgroup({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ColgroupProps): JSX.Element {
  const Comp = asChild ? Slot : COLGROUP_TAG

  return (
    <Comp
      data-slot={COLGROUP_TAG}
      ref={ref}
      className={cn(colgroupVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
