import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type citeVariants } from './utils'
import { CITE_TAG } from './constants'

type CiteBaseProps = ComponentProps<typeof CITE_TAG>

export type CiteProps = AsChildProp &
  VariantProps<typeof citeVariants> &
  CiteBaseProps
