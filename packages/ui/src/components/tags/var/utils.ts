import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const varVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:italic',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
