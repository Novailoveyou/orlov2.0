import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type uVariants } from './utils'
import { U_TAG } from './constants'

type UBaseProps = ComponentProps<typeof U_TAG>

export type UProps = AsChildProp & VariantProps<typeof uVariants> & UBaseProps
