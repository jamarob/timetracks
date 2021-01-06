import { useState } from 'react'
import styled from 'styled-components/macro'

import { PlayButton } from '../../common'
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
      <PlayButton onClick={() => onStart(newTask)} title="Start" />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  place-items: center;
`
