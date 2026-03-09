import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const h4Variants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:font-semibold ui:text-xl ui:tracking-tight ui:scroll-m-20',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
