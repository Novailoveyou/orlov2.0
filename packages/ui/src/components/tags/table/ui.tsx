import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TABLE_TAG } from './constants'
import { tableVariants } from './utils'
import { TableProps } from './model'

/**
 * @description <Table> component to display <table> tag
 * @remarks
 * The <table> HTML element represents tabular data—that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
export function Table({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TableProps): JSX.Element {
  const Comp = asChild ? Slot : TABLE_TAG

  return (
    <Comp
      data-slot={TABLE_TAG}
      ref={ref}
      className={cn(tableVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
