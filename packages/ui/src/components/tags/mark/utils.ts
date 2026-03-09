import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const markVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:bg-yellow-200 ui:text-foreground dark:ui:bg-yellow-700/40',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
