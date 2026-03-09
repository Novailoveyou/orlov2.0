import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type bVariants } from './utils'
import { B_TAG } from './constants'

type BBaseProps = ComponentProps<typeof B_TAG>

export type BProps = AsChildProp & VariantProps<typeof bVariants> & BBaseProps
