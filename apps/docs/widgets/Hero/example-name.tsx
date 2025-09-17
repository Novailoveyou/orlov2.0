'use client'
import 'client-only'

import { useStore } from '@/shared/store'
import { Button } from '@repo/ui/components/shadcnui/button'
import { P } from '@repo/ui/components/tags/p'

export function ExampleName() {
  const name = useStore(state => state.example.name)
  const updateName = useStore(state => state.example.updateName)

  return (
    <>
      <P>
        Example Name: {name}
        <Button
          onClick={() =>
            updateName(name === 'New Name' ? 'Old Name' : 'New Name')
          }>
          Update Name
        </Button>
      </P>
    </>
  )
}
