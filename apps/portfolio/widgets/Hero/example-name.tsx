'use client'
import 'client-only'

import { useStore } from '@/shared/store'
import { Input } from '@repo/ui/components/shadcnui/input'
import { ComponentProps } from 'react'

export function ExampleName() {
  const name = useStore(state => state.example.name)
  const updateName = useStore(state => state.example.updateName)

  const handleInput: ComponentProps<typeof Input>['onChange'] = e => {
    updateName(e.target.value)
  }

  return (
    <>
      <Input type='text' value={name} name='name' onChange={handleInput} />
    </>
  )
}
