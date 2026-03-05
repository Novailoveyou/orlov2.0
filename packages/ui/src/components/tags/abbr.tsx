import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'abbr'

export const abbrVariants = cva('', {
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

type AbbrProps = AsChildProp &
  VariantProps<typeof abbrVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Abbr> component to display <abbr> tag
 * @remarks
 * The <abbr> HTML element represents an abbreviation or acronym.
 * When including an abbreviation or acronym, provide a full expansion of the term in plain text on first use, along with the <abbr> to mark up the abbreviation. This informs the user what the abbreviation or acronym means.
 * The optional title attribute can provide an expansion for the abbreviation or acronym when a full expansion is not present. This provides a hint to user agents on how to announce/display the content while informing all users what the abbreviation means. If present, title must contain this full description and nothing else.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr
 * @example
 * ```tsx
 * const HTMLAbbr = () => {
 *   return (
 *     <Span>
 *       <Abbr>HTML</Abbr> (HyperText Markup Language)
 *     </Span>
 *   )
 * }
 * ```
 */
export function Abbr({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AbbrProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(abbrVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
