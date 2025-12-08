'use client'
import 'client-only'

import { Input } from '@repo/ui/components/shadcnui/input'
import { ComponentProps } from 'react'
import { useStore } from '@/app/store'

export function ExampleName() {
  const example = useStore(state => state.exampleSlice.example)
  const setExample = useStore(state => state.exampleSlice.setExample)

  const handleInput: ComponentProps<typeof Input>['onChange'] = e => {
    setExample(e.target.value)
  }

  return (
    <>
      <Input
        type='text'
        value={example}
        name='example'
        onChange={handleInput}
      />
    </>
  )
}
