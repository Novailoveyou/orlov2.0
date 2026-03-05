import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'main'

export const mainVariants = cva('', {
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

type MainProps = AsChildProp &
  VariantProps<typeof mainVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Main> component to display <main> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
 * @todo fill in tsdoc
 */
export function Main({
  asChild,
  variant,
  ref,
  className,
  children,
  role = 'main',
  ...props
}: MainProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      role={role}
      className={cn(mainVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
