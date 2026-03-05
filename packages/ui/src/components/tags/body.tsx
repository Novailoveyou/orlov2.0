import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'body'

export const bodyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:min-h-dvh ui:transition-[color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,transform,translate,scale,rotate] ui:antialiased ui:text-balance',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type BodyProps = AsChildProp &
  VariantProps<typeof bodyVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Body> component to display <body> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
 * @todo fill in tsdoc
 */
export function Body({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BodyProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(bodyVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
