import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TBODY_TAG } from './constants'
import { tbodyVariants } from './utils'
import { TbodyProps } from './model'

/**
 * @description <Tbody> component to display <tbody> tag
 * @remarks
 * The <tbody> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of a table's (main) data.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
 */
export function Tbody({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TbodyProps): JSX.Element {
  const Comp = asChild ? Slot : TBODY_TAG

  return (
    <Comp
      data-slot={TBODY_TAG}
      ref={ref}
      className={cn(tbodyVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
