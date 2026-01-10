'use client'
import 'client-only'

import { ComponentProps } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const DragNDropProvder = ({
  children,
}: Pick<ComponentProps<typeof DndProvider>, 'children'>) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>
}
