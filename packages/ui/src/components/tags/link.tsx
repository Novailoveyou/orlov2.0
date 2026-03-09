import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'link'

export const linkVariants = cva('', {
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

type LinkProps = AsChildProp &
  VariantProps<typeof linkVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Link> component to display <link> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 * @remarks
 * The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
 */
export function Link({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: LinkProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(linkVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
