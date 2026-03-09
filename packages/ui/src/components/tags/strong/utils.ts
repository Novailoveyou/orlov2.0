import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const strongVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-bold',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
