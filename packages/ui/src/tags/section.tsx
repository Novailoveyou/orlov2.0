import { cn } from '../utils'
import { ComponentProps } from 'react'

type SectionPropsBase = ComponentProps<'section'>

type SectionProps = SectionPropsBase & Required<Pick<SectionPropsBase, 'id'>>

/**
 * @description Specifies the section of a document
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 */
export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn(className)} {...props}>
      {children}
    </section>
  )
}
