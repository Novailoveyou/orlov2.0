import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type navVariants } from './utils'
import { NAV_TAG } from './constants'

type NavBaseProps = ComponentProps<typeof NAV_TAG>

export type NavProps = AsChildProp &
  VariantProps<typeof navVariants> &
  NavBaseProps
