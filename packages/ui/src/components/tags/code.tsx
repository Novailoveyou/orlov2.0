import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'code'

export const codeVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:relative ui:bg-muted ui:px-[0.3rem] ui:py-[0.2rem] ui:rounded ui:font-mono ui:font-semibold ui:text-sm',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type CodeProps = AsChildProp &
  VariantProps<typeof codeVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Code> component to display <code> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
 * @todo fill in tsdoc
 */
export function Code({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: CodeProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(codeVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
