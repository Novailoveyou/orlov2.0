import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const menuVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:mt-6 ui:pl-6',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
