import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { MAIN_TAG } from './constants'
import { mainVariants } from './utils'
import { MainProps } from './model'

/**
 * @description <Main> component to display <main> tag
 * @remarks
 * The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
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
  const Comp = asChild ? Slot : MAIN_TAG

  return (
    <Comp
      data-slot={MAIN_TAG}
      ref={ref}
      role={role}
      className={cn(mainVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
