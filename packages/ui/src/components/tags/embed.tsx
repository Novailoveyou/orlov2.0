import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'embed'

export const embedVariants = cva('', {
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

type EmbedProps = AsChildProp &
  VariantProps<typeof embedVariants> &
  ComponentProps<typeof TAG>

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
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(embedVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
