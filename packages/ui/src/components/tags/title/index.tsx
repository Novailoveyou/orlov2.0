import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { TITLE_TAG } from './constants'
import { titleVariants } from './utils'
import { TitleProps } from './model'

/**
 * @description <Title> component to display <title> tag
 * @remarks
 * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; HTML tags within the element, if any, are also treated as plain text.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
 */
export function Title({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  const Comp = asChild ? Slot : TITLE_TAG

  return (
    <Comp
      data-slot={TITLE_TAG}
      ref={ref}
      className={cn(titleVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
