import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'style'

export const styleVariants = cva('', {
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

type StyleProps = AsChildProp &
  VariantProps<typeof styleVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Style> component to display <style> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
 * @remarks
 * The <style> HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the <style> element.
 */
export function Style({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: StyleProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(styleVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
