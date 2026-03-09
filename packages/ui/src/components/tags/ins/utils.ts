import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const insVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:underline',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
