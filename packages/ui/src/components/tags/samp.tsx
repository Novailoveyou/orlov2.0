import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'samp'

export const sampVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:text-sm',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type SampProps = AsChildProp &
  VariantProps<typeof sampVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Samp> component to display <samp> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
 * @remarks
 * The <samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
 */
export function Samp({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: SampProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(sampVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
