import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'title'

export const titleVariants = cva('', {
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

type TitleProps = AsChildProp &
  VariantProps<typeof titleVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Title> component to display <title> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
 * @remarks
 * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; HTML tags within the element, if any, are also treated as plain text.
 */
export function Title({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(titleVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
