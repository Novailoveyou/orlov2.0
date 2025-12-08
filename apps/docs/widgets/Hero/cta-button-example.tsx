'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { useStore } from '@/app/store'

export function CTAButtonExample() {
  const example = useStore(state => state.exampleSlice.example)
  const setExample = useStore(state => state.exampleSlice.setExample)

  return (
    <Button
      className='bg-amber-950'
      onClick={() => setExample(example ? '' : 'example')}>
      Button {example}
    </Button>
  )
}
