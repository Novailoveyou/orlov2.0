import { createSlice } from './utils'

export type ExampleStore = {
  example: {
    name: string
    updateName: (name: ExampleStore['example']['name']) => void
  }
}

export const exampleSlice = createSlice<ExampleStore>(set => ({
  example: {
    name: 'Example',
    updateName: name =>
      set(state => {
        state.example.name = name
      }),
  },
}))
