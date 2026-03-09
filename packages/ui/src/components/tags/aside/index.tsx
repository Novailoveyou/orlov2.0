import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { ASIDE_TAG } from './constants'
import { asideVariants } from './utils'
import { AsideProps } from './model'

/**
 * @description <Aside> component to display <aside> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
 * @remarks
 * The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
 */
export function Aside({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AsideProps): JSX.Element {
  const Comp = asChild ? Slot : ASIDE_TAG

  return (
    <Comp
      data-slot={ASIDE_TAG}
      ref={ref}
      className={cn(asideVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
