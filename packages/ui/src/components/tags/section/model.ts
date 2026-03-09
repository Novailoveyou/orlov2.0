import { ComponentProps } from 'react'
import { AsChildProp } from '../../../model/as-child-prop'
import { type VariantProps } from 'class-variance-authority'
import { type sectionVariants } from './utils'
import { SECTION_TAG } from './constants'

type BaseSectionProps = ComponentProps<typeof SECTION_TAG>

export type SectionProps = AsChildProp &
  VariantProps<typeof sectionVariants> &
  Required<Pick<BaseSectionProps, 'id'>> &
  Omit<BaseSectionProps, 'id'>
