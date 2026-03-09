import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const pVariants = cva('', {
  variants: {
    variant: {
      default: '',
      lead: 'ui:text-muted-foreground ui:text-xl',
      large: 'ui:text-lg ui:font-semibold',
      muted: 'ui:text-muted-foreground ui:text-sm',
      opinionated: 'ui:text-foreground',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
