'use client'
import 'client-only'

import { Button } from '@repo/ui/components/shadcnui/button'
import { useStore } from '@/app/store'

export function CTAButtonExample2() {
  const example2 = useStore(state => state.example2Slice.example2)

  return <Button className='bg-amber-950'>Button {example2}</Button>
}
