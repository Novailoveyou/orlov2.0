import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'thead'

export const theadVariants = cva('', {
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

type TheadProps = AsChildProp &
  VariantProps<typeof theadVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Thead> component to display <thead> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
 * @remarks
 * The <thead> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers (<th> elements).
 */
export function Thead({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TheadProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(theadVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
