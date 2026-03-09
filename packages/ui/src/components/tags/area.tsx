import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'area'

export const areaVariants = cva('', {
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

type AreaProps = AsChildProp &
  VariantProps<typeof areaVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Area> component to display <area> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 * @remarks
 * The <area> HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext links.
 * This element is used only within a <map> element.
 */
export function Area({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: AreaProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(areaVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
