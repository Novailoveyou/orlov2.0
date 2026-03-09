import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type videoVariants } from './utils'
import { VIDEO_TAG } from './constants'

type VideoBaseProps = ComponentProps<typeof VIDEO_TAG>

export type VideoProps = AsChildProp &
  VariantProps<typeof videoVariants> &
  VideoBaseProps
