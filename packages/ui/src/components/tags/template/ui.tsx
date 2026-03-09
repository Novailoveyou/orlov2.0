import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TEMPLATE_TAG } from './constants'
import { templateVariants } from './utils'
import { TemplateProps } from './model'

/**
 * @description <Template> component to display <template> tag
 * @remarks
 * The <template> HTML element serves as a mechanism for holding HTML fragments, which can either be used later via JavaScript or generated immediately into shadow DOM.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 */
export function Template({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TemplateProps): JSX.Element {
  const Comp = asChild ? Slot : TEMPLATE_TAG

  return (
    <Comp
      data-slot={TEMPLATE_TAG}
      ref={ref}
      className={cn(templateVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
