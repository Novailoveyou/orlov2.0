import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const smallVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'font-medium text-sm leading-none',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
