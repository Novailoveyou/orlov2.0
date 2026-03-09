import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type audioVariants } from './utils'
import { AUDIO_TAG } from './constants'

export type AudioProps = AsChildProp &
  VariantProps<typeof audioVariants> &
  ComponentProps<typeof AUDIO_TAG>
