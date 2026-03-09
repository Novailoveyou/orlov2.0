import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type asideVariants } from './utils'
import { ASIDE_TAG } from './constants'

type AsideBaseProps = ComponentProps<typeof ASIDE_TAG>

export type AsideProps = AsChildProp &
  VariantProps<typeof asideVariants> &
  AsideBaseProps
