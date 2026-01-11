'use client'
import 'client-only'

import { useMutation } from '@/shared/api'
import { incrementScore } from '../actions/increment-score'

export const useIncrementScore = () =>
  useMutation('/incremenet-score', incrementScore, {
    entity: 'incrementScore',
  })
