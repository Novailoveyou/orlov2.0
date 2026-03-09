import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const mainVariants = cva('', {
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
