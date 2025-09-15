import { cn } from '../../utils'
import { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const paragraphVariants = cva('', {
  variants: {
    variant: {
      default:
        'ui:bg-primary ui:text-primary-foreground ui:shadow-xs hover:ui:bg-primary/90',
      lead: 'ui:text-muted-foreground ui:text-xl',
      large: 'ui:text-lg ui:font-semibold',
      muted: 'ui:text-muted-foreground ui:text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type PProps = ComponentProps<'p'> & VariantProps<typeof paragraphVariants>

/**
 * @description P component to display paragraphs of text
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
 */
export function P({ children, className, variant, ...props }: PProps) {
  return (
    <p className={cn(paragraphVariants({ variant, className }))} {...props}>
      {children}
    </p>
  )
}
