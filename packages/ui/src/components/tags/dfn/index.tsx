import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { DFN_TAG } from './constants'
import { dfnVariants } from './utils'
import { DfnProps } from './model'

/**
 * @description <Dfn> component to display <dfn>
 * @remarks
 * The <dfn> HTML element is used to indicate the term being defined within the context of a definition phrase or sentence.
 * The ancestor <p> element, the <dt>/<dd> pairing, or the nearest <section> ancestor of the <dfn> element, is considered to be the definition of the term.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
 * @example
 * ```tsx
 * const Term = () => <p><Dfn>HTML</Dfn> is the standard markup language for creating web pages.</p>
 * ```
 */
export function Dfn({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DfnProps): JSX.Element {
  const Comp = asChild ? Slot : DFN_TAG

  return (
    <Comp
      data-slot={DFN_TAG}
      ref={ref}
      className={cn(dfnVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
