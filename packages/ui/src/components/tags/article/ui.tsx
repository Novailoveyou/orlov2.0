import { JSX } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../../utils'
import { ARTICLE_TAG } from './constants'
import { articleVariants } from './utils'
import { ArticleProps } from './model'

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
  const Comp = asChild ? Slot : ARTICLE_TAG

  return (
    <Comp
      data-slot={ARTICLE_TAG}
      ref={ref}
      className={cn(articleVariants({ variant, className }))}
      {...props}>
      {children}
    </Comp>
  )
}
