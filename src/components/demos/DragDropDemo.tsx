import React, { useState } from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'

function DraggableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef: setDraggableRef, transform, isDragging } = useDraggable({ id })
  const { setNodeRef: setDroppableRef, isOver } = useDroppable({ id })
  const setRef = (el: HTMLElement | null) => {
    setDraggableRef(el)
    setDroppableRef(el)
  }
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.9 : 1,
  }

  return (
    <Paper ref={setRef} {...attributes} {...listeners} sx={{ p: 2, cursor: 'grab' }} style={style}>
      {isOver ? <strong>{children}</strong> : children}
    </Paper>
  )
}

export default function DragDropDemo() {
    const { t } = useTranslation();
  const [items, setItems] = useState<string[]>([
    t('demos.drag_drop.task_a'),
    t('demos.drag_drop.task_b'),
    t('demos.drag_drop.task_c')
  ])
  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return
    const activeId = String(active.id)
    const overId = String(over.id)
    if (activeId !== overId) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(activeId)
        const newIndex = prev.indexOf(overId)
        if (oldIndex === -1 || newIndex === -1) return prev
        const next = [...prev]
        next.splice(oldIndex, 1)
        next.splice(newIndex, 0, activeId)
        return next
      })
    }
  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{t('demos.drag_drop.title')}</Typography>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {items.map((id) => (
            <DraggableItem key={id} id={id}>
              {id}
            </DraggableItem>
          ))}
        </Box>
      </DndContext>
    </Paper>
  )
}
