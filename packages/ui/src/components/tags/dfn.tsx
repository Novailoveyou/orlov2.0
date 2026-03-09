import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'dfn'

export const dfnVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:italic ui:font-semibold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type DfnProps = AsChildProp &
  VariantProps<typeof dfnVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Dfn> component to display <dfn> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
 * @remarks
 * The <dfn> HTML element indicates a term to be defined. The <dfn> element should be used in a complete definition statement, where the full definition of the term can be one of the following:
 * The ancestor paragraph (a block of text, sometimes marked by a <p> element)
 * The <dt>/<dd> pairing
 * The nearest section ancestor of the <dfn> element,
 */
export function Dfn({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: DfnProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(dfnVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
