import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type qVariants } from './utils'
import { Q_TAG } from './constants'

type QBaseProps = ComponentProps<typeof Q_TAG>

export type QProps = AsChildProp & VariantProps<typeof qVariants> & QBaseProps
