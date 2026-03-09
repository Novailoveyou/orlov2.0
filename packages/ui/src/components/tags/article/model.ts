import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type articleVariants } from './utils'
import { ARTICLE_TAG } from './constants'

export type ArticleProps = AsChildProp &
  VariantProps<typeof articleVariants> &
  ComponentProps<typeof ARTICLE_TAG>
