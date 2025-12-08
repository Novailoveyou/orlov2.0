'use client'
import 'client-only'

import { createSlice } from '@/app/store'
import { ExampleStore } from './model'

export const exampleSlice = createSlice<ExampleStore>(set => ({
  exampleSlice: {
    example: '',
    setExample: example =>
      set(state => {
        state.exampleSlice.example = example
        state.example2Slice.example2 = example ? example + '1' : ''
      }),
  },
}))
