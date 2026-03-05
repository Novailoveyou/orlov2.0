import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'

export const aVariants = cva('', {
  variants: {
    variant: {
      base: '',
      opinionated: 'ui:text-inherit ui:no-underline ui:cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'opinionated',
  },
})

type AProps = AsChildProp & VariantProps<typeof aVariants> & ComponentProps<'a'>

/**
 * @description A component to display <a>
 * @remarks
 * The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 * Content within each <a> should indicate the link's destination. If the href attribute is present, pressing the enter key while focused on the <a> element will activate it.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 * @example
 * ```tsx
 * const HomeLink = () => <A href='/'>Go To Home</A>
 * ```
 */
export function A({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AProps): JSX.Element {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot='a'
      ref={ref}
      className={cn(aVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
