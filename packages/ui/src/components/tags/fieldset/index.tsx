import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { FIELDSET_TAG } from './constants'
import { fieldsetVariants } from './utils'
import { FieldsetProps } from './model'

/**
 * @description <Fieldset> component to display <fieldset> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
 * @remarks
 * The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form.
 */
export function Fieldset({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: FieldsetProps): JSX.Element {
  const Comp = asChild ? Slot : FIELDSET_TAG

  return (
    <Comp
      data-slot={FIELDSET_TAG}
      ref={ref}
      className={cn(fieldsetVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
