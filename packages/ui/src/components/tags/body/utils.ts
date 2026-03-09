import { cva } from 'class-variance-authority'
import { DEFAULT_VARIANT } from '../constants'

export const bodyVariants = cva('', {
  variants: {
    variant: {
      default: '',
      opinionated:
        'ui:min-h-dvh ui:transition-[color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,transform,translate,scale,rotate] ui:antialiased ui:text-balance',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})
