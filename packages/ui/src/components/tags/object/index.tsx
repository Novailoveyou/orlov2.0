import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { OBJECT_TAG } from './constants'
import { objectVariants } from './utils'
import { ObjectProps } from './model'

/**
 * @description <Object> component to display <object> tag
 * @remarks
 * The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
 */
export function Object({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ObjectProps): JSX.Element {
  const Comp = asChild ? Slot : OBJECT_TAG

  return (
    <Comp
      data-slot={OBJECT_TAG}
      ref={ref}
      className={cn(objectVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
