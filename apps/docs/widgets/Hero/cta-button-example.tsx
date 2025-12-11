'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { useStore } from '@/app/store'

export function CTAButtonExample() {
  const example = useStore(state => state.exampleSlice.example)
  const example2 = useStore(state => state.example2Slice.example2)
  const setExample = useStore(state => state.exampleSlice.setExample)

  return (
    <Button
      className='bg-amber-950'
      onClick={() => setExample(example ? '' : 'example')}>
      Button {example} {example2}
    </Button>
  )
}
