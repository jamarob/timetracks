import styled from 'styled-components/macro'

import { Task, Wip } from '../../models'
import CurrentTask from './CurrentTask'
import TaskList from './TaskList'

interface Props {
  tasks: Task[]
  wip: Wip
}

export default function Timesheet({ tasks, wip }: Props) {
  return (
    <Main>
      <TaskList tasks={tasks} />
      <CurrentTask wip={wip} />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-rows: 1fr min-content;
  background: #222;
  overflow: hidden;
`
