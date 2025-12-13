import './App.css'
import { useDrag } from 'react-dnd'

function App() {
  return <Card isDragging text='card' />
}

export function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'card',
      item: { text },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [],
  )
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}

export default App
