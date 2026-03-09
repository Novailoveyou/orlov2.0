import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'select'

export const selectVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:cursor-pointer',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type SelectProps = AsChildProp &
  VariantProps<typeof selectVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Select> component to display <select> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 * @remarks
 * The <select> HTML element represents a control that provides a menu of options.
 */
export function Select({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SelectProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(selectVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
