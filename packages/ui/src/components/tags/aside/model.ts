import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type asideVariants } from './utils'
import { ASIDE_TAG } from './constants'

export type AsideProps = AsChildProp &
  VariantProps<typeof asideVariants> &
  ComponentProps<typeof ASIDE_TAG>
