'use client'
import 'client-only'

// import { mutationPost } from '@/shared/actions'
import { useFetcher } from '@/shared/api'
import { getQNAs } from '../actions/get-qnas'

export const useQNAs = () =>
  useFetcher('/qnas', getQNAs, {
    entity: 'QNAs',
    fallbackData: [],
  })
