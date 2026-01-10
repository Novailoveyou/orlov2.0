'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { isMobile } from 'react-device-detect'

export const DragNDropProvder = ({
  children,
}: Pick<ComponentProps<typeof DndProvider>, 'children'>) => {
  if (!isMobile) {
    return <DndProvider backend={HTML5Backend}>{children}</DndProvider>
  }

  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      {children}
    </DndProvider>
  )
}
