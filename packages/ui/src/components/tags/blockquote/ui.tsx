import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { BLOCKQUOTE_TAG } from './constants'
import { blockquoteVariants } from './utils'
import { BlockquoteProps } from './model'

/**
 * @description <Blockquote> component to display <blockquote> tag
 * @remarks
 * The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote
 * @example
 * ```tsx
 * const BraveNewWorldBlockquote = () => {
 *   return (
 *     <Div>
 *       <Blockquote cite="https://www.huxley.net/bnw/four.html">
 *         <P>
 *           Words can be like X-rays, if you use them properly—they'll go through anything. You read and you're pierced.
 *         </P>
 *       </Blockquote>
 *       <P>—Aldous Huxley, <Cite>Brave New World</Cite></P>
 *     </Div>
 *   )
 * }
 * ```
 */
export function Blockquote({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: BlockquoteProps): JSX.Element {
  const Comp = asChild ? Slot : BLOCKQUOTE_TAG

  return (
    <Comp
      data-slot={BLOCKQUOTE_TAG}
      ref={ref}
      className={cn(blockquoteVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
