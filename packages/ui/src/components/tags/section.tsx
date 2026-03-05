import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'section'

export const sectionVariants = cva('', {
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

type BaseSectionProps = ComponentProps<typeof TAG>

type SectionProps = AsChildProp &
  VariantProps<typeof sectionVariants> &
  Required<Pick<BaseSectionProps, 'id'>> &
  Omit<BaseSectionProps, 'id'>

/**
 * @description <Section> component to display <section> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 * @todo fill in tsdoc
 */
export function Section({
  asChild,
  variant,
  ref,
  id,
  className,
  children,
  ...props
}: SectionProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      id={id}
      className={cn(sectionVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
