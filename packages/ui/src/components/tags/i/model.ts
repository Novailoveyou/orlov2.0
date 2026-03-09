import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type iVariants } from './utils'
import { I_TAG } from './constants'

type IBaseProps = ComponentProps<typeof I_TAG>

export type IProps = AsChildProp & VariantProps<typeof iVariants> & IBaseProps
