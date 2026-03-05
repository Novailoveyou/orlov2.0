import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'li'

export const liVariants = cva('', {
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

type LiProps = AsChildProp &
  VariantProps<typeof liVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Li> component to display <li> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 * @todo fill in tsdoc
 */
export function Li({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: LiProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      id={id}
      className={cn(liVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
