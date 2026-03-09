import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { THEAD_TAG } from './constants'
import { theadVariants } from './utils'
import { TheadProps } from './model'

/**
 * @description <Thead> component to display <thead> tag
 * @remarks
 * The <thead> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers (<th> elements).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
 */
export function Thead({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TheadProps): JSX.Element {
  const Comp = asChild ? Slot : THEAD_TAG

  return (
    <Comp
      data-slot={THEAD_TAG}
      ref={ref}
      className={cn(theadVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
