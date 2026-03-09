import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type pVariants } from './utils'
import { P_TAG } from './constants'

type PBaseProps = ComponentProps<typeof P_TAG>

export type PProps = AsChildProp & VariantProps<typeof pVariants> & PBaseProps
