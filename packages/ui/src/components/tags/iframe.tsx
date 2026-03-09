import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'iframe'

export const iframeVariants = cva('', {
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

type IframeProps = AsChildProp &
  VariantProps<typeof iframeVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Iframe> component to display <iframe> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 * @remarks
 * The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one.
 */
export function Iframe({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: IframeProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(iframeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
