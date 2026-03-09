import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const buttonVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:cursor-pointer',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
