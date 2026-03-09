import { ComponentProps, JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { AsChildProp } from '../../model/as-child-prop'
import { cn } from '../../utils'
import { DEFAULT_VARIANT } from './constants'

const TAG = 'article'

export const articleVariants = cva('', {
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

type ArticleProps = AsChildProp &
  VariantProps<typeof articleVariants> &
  ComponentProps<typeof TAG>

/**
 * @description <Article> component to display <article> tag
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
 * @remarks
 * The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.
 */
export function Article({
  asChild,
  variant,
  ref,
  className,
  children,
  ...props
}: ArticleProps): JSX.Element {
  const Comp = asChild ? Slot : TAG

  return (
    <Comp
      data-slot={TAG}
      ref={ref}
      className={cn(articleVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
