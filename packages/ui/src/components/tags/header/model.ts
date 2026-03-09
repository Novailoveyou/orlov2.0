import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type headerVariants } from './utils'
import { HEADER_TAG } from './constants'

type HeaderBaseProps = ComponentProps<typeof HEADER_TAG>

export type HeaderProps = AsChildProp &
  VariantProps<typeof headerVariants> &
  HeaderBaseProps
