import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'template'

export const templateVariants = cva('', {
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

type TemplateProps = AsChildProp &
  VariantProps<typeof templateVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Template> component to display <template> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 * @remarks
 * The <template> HTML element serves as a mechanism for holding HTML fragments, which can either be used later via JavaScript or generated immediately into shadow DOM.
 */
export function Template({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: TemplateProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(templateVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
