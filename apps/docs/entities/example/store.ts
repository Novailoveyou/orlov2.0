import { createSlice } from '@/app/store/init'
import { ExampleStore } from './model'

export const exampleSlice = createSlice<ExampleStore>(set => ({
  exampleSlice: {
    example: '',
    setExample: example =>
      set(state => {
        state.exampleSlice.example = example
      }),
  },
}))
