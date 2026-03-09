import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type aVariants } from './utils'
import { A_TAG } from './constants'

type ABaseProps = ComponentProps<typeof A_TAG>

export type AProps = AsChildProp & VariantProps<typeof aVariants> & ABaseProps
