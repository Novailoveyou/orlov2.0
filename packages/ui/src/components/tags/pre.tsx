import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'pre'

export const preVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:whitespace-pre ui:overflow-auto',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

type PreProps = AsChildProp &
  VariantProps<typeof preVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Pre> component to display <pre> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
 * @remarks
 * The <pre> HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced font.
 * Whitespace inside this element is displayed as written, with one exception. If one or more leading newline characters are included immediately following the opening <pre> tag, the first newline character is stripped. This transformation is done by the HTML parser and does not apply when using XHTML.
 * <pre> elements' text content is parsed as HTML, so if you want to ensure that your text content stays as plain text, some syntax characters, such as <, may need to be escaped using their respective character references. See escaping ambiguous characters for more information.
 * <pre> elements commonly contain <code>, <samp>, and <kbd> elements, to represent computer code, computer output, and user input, respectively.
 * By default, <pre> is a block-level element, i.e., its default display value is block.
 */
export function Pre({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: PreProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(preVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
