import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const aVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:text-inherit ui:no-underline ui:cursor-pointer',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
