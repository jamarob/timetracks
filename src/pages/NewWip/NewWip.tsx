import { useState } from 'react'
import styled from 'styled-components/macro'

import { IconButton } from '../../common'
import TaskInput from './TaskInput'

interface Props {
  task?: string
  onStart: (task: string) => void
}

export default function NewWipPage({ task, onStart }: Props) {
  const [newTask, setNewTask] = useState(task || '')
  return (
    <Main>
      <TaskInput task={newTask} setTask={setNewTask} />
      <IconButton onClick={() => onStart(newTask)} icon="start" size="80px" />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
`
