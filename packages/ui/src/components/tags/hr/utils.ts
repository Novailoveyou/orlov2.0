import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const hrVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:border-0 ui:border-t',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
