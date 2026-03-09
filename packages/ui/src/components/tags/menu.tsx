import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'menu'

export const menuVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:mt-6 ui:pl-6',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type MenuProps = AsChildProp &
  VariantProps<typeof menuVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Menu> component to display <menu> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
 * @remarks
 * The <menu> HTML element is described in the HTML specification as a semantic alternative to <ul>, but treated by browsers (and exposed through the accessibility tree) as no different than <ul>. It represents an unordered list of items (which are represented by <li> elements).
 */
export function Menu({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: MenuProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      id={id}
      className={cn(menuVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
