import { cn } from '../utils'
import { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

export const paragraphVariants = cva('', {
  variants: {
    variant: {
      default:
        'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      lead: 'text-muted-foreground text-xl',
      large: 'text-lg font-semibold',
      muted: 'text-muted-foreground text-sm',
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
