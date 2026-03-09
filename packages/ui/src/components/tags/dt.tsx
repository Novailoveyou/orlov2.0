import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'dt'

export const dtVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type DtProps = AsChildProp &
  VariantProps<typeof dtVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Dt> component to display <dt> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
 * @remarks
 * The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.
 * The subsequent <dd> (Description Details) element provides the definition or other related text associated with the term specified using <dt>.
 */
export function Dt({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DtProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(dtVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
