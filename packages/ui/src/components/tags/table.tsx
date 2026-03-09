import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'table'

export const tableVariants = cva('', {
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

type TableProps = AsChildProp &
  VariantProps<typeof tableVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Table> component to display <table> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * @remarks
 * The <table> HTML element represents tabular data—that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 */
export function Table({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TableProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(tableVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
