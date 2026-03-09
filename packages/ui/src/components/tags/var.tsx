import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'var'

export const varVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:italic',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type VarProps = AsChildProp &
  VariantProps<typeof varVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Var> component to display <var> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
 * @remarks
 * The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 */
export function Var({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: VarProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(varVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
