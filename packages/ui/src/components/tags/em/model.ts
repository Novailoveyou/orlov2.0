import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type emVariants } from './utils'
import { EM_TAG } from './constants'

type EmBaseProps = ComponentProps<typeof EM_TAG>

export type EmProps = AsChildProp &
  VariantProps<typeof emVariants> &
  EmBaseProps
