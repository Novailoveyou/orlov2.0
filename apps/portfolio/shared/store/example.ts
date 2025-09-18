import { APP_NAME } from '@/shared/constants'
import { createSlice } from './utils'

export type ExampleStore = {
  example: {
    name: string
    updateName: (name: ExampleStore['example']['name']) => void
  }
}

export const exampleSlice = createSlice<ExampleStore>(set => ({
  example: {
    name: APP_NAME,
    updateName: name =>
      set(state => {
        state.example.name = name
      }),
  },
}))
