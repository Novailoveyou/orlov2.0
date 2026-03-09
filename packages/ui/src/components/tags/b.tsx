import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'b'

export const bVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-bold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type BProps = AsChildProp &
  VariantProps<typeof bVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <B> component to display <b> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
 * @remarks
 * The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the <strong> element.
 */
export function B({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(bVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
