import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'noscript'

export const noscriptVariants = cva('', {
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

type NoscriptProps = AsChildProp &
  VariantProps<typeof noscriptVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Noscript> component to display <noscript> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
 * @remarks
 * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
 */
export function Noscript({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: NoscriptProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(noscriptVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
