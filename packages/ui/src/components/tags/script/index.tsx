import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { SCRIPT_TAG } from './constants'
import { scriptVariants } from './utils'
import { ScriptProps } from './model'

/**
 * @description <Script> component to display <script> tag
 * @remarks
 * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 */
export function Script({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ScriptProps): JSX.Element {
  const Comp = asChild ? Slot : SCRIPT_TAG

  return (
    <Comp
      data-slot={SCRIPT_TAG}
      ref={ref}
      className={cn(scriptVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
