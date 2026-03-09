import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type summaryVariants } from './utils'
import { SUMMARY_TAG } from './constants'

type SummaryBaseProps = ComponentProps<typeof SUMMARY_TAG>

export type SummaryProps = AsChildProp &
  VariantProps<typeof summaryVariants> &
  SummaryBaseProps
