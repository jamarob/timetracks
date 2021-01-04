import styled from 'styled-components/macro'

import { Task, Wip } from '../../models'
import {
  CurrentWip,
  ElapsedTime,
  List,
  StartTime,
  TaskItem,
} from '../../common'

interface Props {
  tasks: Task[]
  wip: Wip
}

export default function Timesheet({ tasks, wip }: Props) {
  return (
    <Main>
      <List
        items={tasks}
        genKey={(task) => task.start.getTime()}
        render={(task) => (
          <TaskItem
            name={task.name}
            time={<ElapsedTime start={task.start} end={task.end} />}
            headline={<StartTime time={task.start} />}
          />
        )}
      />
      <CurrentWip wip={wip} />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-rows: 1fr min-content;
  background: #222;
  overflow: hidden;
`
