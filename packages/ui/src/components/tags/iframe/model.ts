import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type iframeVariants } from './utils'
import { IFRAME_TAG } from './constants'

export type IframeProps = AsChildProp &
  VariantProps<typeof iframeVariants> &
  ComponentProps<typeof IFRAME_TAG>
