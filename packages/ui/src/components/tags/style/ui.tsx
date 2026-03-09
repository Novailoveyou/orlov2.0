import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { STYLE_TAG } from './constants'
import { styleVariants } from './utils'
import { StyleProps } from './model'

/**
 * @description <Style> component to display <style> tag
 * @remarks
 * The <style> HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the <style> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
 */
export function Style({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: StyleProps): JSX.Element {
  const Comp = asChild ? Slot : STYLE_TAG

  return (
    <Comp
      data-slot={STYLE_TAG}
      ref={ref}
      className={cn(styleVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
