import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { EMBED_TAG } from './constants'
import { embedVariants } from './utils'
import { EmbedProps } from './model'

/**
 * @description <Embed> component to display <embed> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
 * @remarks
 * The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
 */
export function Embed({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: EmbedProps): JSX.Element {
  const Comp = asChild ? Slot : EMBED_TAG

  return (
    <Comp
      data-slot={EMBED_TAG}
      ref={ref}
      className={cn(embedVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
