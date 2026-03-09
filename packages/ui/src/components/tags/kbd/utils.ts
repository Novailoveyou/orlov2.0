import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const kbdVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:font-mono ui:text-sm',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
