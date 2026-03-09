import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'datalist'

export const datalistVariants = cva('', {
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

type DatalistProps = AsChildProp &
  VariantProps<typeof datalistVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Datalist> component to display <datalist> tag (Limited availability)
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
 * @remarks
 * The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.
 */
export function Datalist({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DatalistProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(datalistVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
