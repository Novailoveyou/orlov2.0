'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { useSwipeable } from 'react-swipeable'
import { Div } from '@/shared/components/div'
import { useRouter } from '@/app/_/i18n/navigation'
import { useSelectedLayoutSegment } from 'next/navigation'

export const SwipeNavigation = ({
  children,
  ...props
}: Pick<ComponentProps<typeof Div>, 'children'>) => {
  const router = useRouter()

  // TODO: refactor this into a hook to be reused across the app
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  // const isActive = pathname === href

  const handlers = useSwipeable({
    onSwipedLeft: e => {
      // move right -->
      console.log('left')
      router.push('/portfolio')
    },
    onSwipedRight: e => {
      // <-- move left
      console.log('right')
    },
  })
  return (
    <Div {...handlers} {...props}>
      {children}
    </Div>
  )
}
