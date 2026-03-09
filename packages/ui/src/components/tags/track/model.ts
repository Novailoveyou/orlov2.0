import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type trackVariants } from './utils'
import { TRACK_TAG } from './constants'

export type TrackProps = AsChildProp &
  VariantProps<typeof trackVariants> &
  ComponentProps<typeof TRACK_TAG>
