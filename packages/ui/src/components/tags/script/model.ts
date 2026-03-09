import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type scriptVariants } from './utils'
import { SCRIPT_TAG } from './constants'

export type ScriptProps = AsChildProp &
  VariantProps<typeof scriptVariants> &
  ComponentProps<typeof SCRIPT_TAG>
