'use client'
import 'client-only'

import { createSlice } from '@/app/store'
import { Example2Store } from './model'

export const example2Slice = createSlice<Example2Store>(set => ({
  example2Slice: {
    example2: '',
    setExample2: example2 =>
      set(state => {
        state.example2Slice.example2 = example2
      }),
  },
}))
