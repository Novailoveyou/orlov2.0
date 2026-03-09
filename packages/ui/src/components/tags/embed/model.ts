import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type embedVariants } from './utils'
import { EMBED_TAG } from './constants'

export type EmbedProps = AsChildProp &
  VariantProps<typeof embedVariants> &
  ComponentProps<typeof EMBED_TAG>
