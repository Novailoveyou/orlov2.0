import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const blockquoteVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated: 'ui:mt-6 ui:pl-6 ui:border-l-2 ui:italic',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
