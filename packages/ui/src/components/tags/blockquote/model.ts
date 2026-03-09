import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type blockquoteVariants } from './utils'
import { BLOCKQUOTE_TAG } from './constants'

type BlockquoteBaseProps = ComponentProps<typeof BLOCKQUOTE_TAG>

export type BlockquoteProps = AsChildProp &
  VariantProps<typeof blockquoteVariants> &
  BlockquoteBaseProps
