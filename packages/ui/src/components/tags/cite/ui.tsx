import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { CITE_TAG } from './constants'
import { citeVariants } from './utils'
import { CiteProps } from './model'

/**
 * @description <Cite> component to display <cite> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @remarks
 * The <cite> HTML element is used to mark up the title of a creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 */
export function Cite({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: CiteProps): JSX.Element {
  const Comp = asChild ? Slot : CITE_TAG

  return (
    <Comp
      data-slot={CITE_TAG}
      ref={ref}
      className={cn(citeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
