import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type menuVariants } from './utils'
import { MENU_TAG } from './constants'

export type MenuProps = AsChildProp &
  VariantProps<typeof menuVariants> &
  ComponentProps<typeof MENU_TAG>
