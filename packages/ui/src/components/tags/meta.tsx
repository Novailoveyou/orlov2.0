import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'meta'

export const metaVariants = cva('', {
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

type MetaProps = AsChildProp &
  VariantProps<typeof metaVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Meta> component to display <meta> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 * @remarks
 * The <meta> HTML element represents metadata that cannot be represented by other meta-related elements, such as <base>, <link>, <script>, <style>, or <title>.
 * The type of metadata provided by the <meta> element can be one of the following:
 * If the name attribute is set, the <meta> element provides document-level metadata that applies to the whole page.
 * If the http-equiv attribute is set, the <meta> element acts as a pragma directive to simulate directives that could otherwise be given by an HTTP header.
 * If the charset attribute is set, the <meta> element is a charset declaration, giving the character encoding in which the document is encoded.
 * If the itemprop attribute is set, the <meta> element provides user-defined metadata.
 */
export function Meta({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: MetaProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(metaVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
