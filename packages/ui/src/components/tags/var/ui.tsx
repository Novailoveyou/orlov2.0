import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { VAR_TAG } from './constants'
import { varVariants } from './utils'
import { VarProps } from './model'

/**
 * @description <Var> component to display <var> tag
 * @remarks
 * The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
 */
export function Var({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: VarProps): JSX.Element {
  const Comp = asChild ? Slot : VAR_TAG

  return (
    <Comp
      data-slot={VAR_TAG}
      ref={ref}
      className={cn(varVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
