import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sVariants } from './utils'
import { S_TAG } from './constants'

type SBaseProps = ComponentProps<typeof S_TAG>

export type SProps = AsChildProp & VariantProps<typeof sVariants> & SBaseProps
