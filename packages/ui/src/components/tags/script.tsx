import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'script'

export const scriptVariants = cva('', {
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

type ScriptProps = AsChildProp &
  VariantProps<typeof scriptVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Script> component to display <script> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 * @remarks
 * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.
 */
export function Script({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ScriptProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(scriptVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
