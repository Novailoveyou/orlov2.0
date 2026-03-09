import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SECTION_TAG } from './constants'
import { sectionVariants } from './utils'
import { SectionProps } from './model'

/**
 * @description <Section> component to display <section> tag
 * @remarks
 * The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 */
export function Section({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: SectionProps): JSX.Element {
  const Comp = asChild ? Slot : SECTION_TAG

  return (
    <Comp
      data-slot={SECTION_TAG}
      ref={ref}
      id={id}
      className={cn(sectionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
