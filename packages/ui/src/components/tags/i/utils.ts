import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const iVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:italic',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
