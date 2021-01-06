import styled from 'styled-components/macro'
import { ElapsedTime, List, CurrentWip, TaskItem } from '../../common'
import { Task, Wip } from '../../models'
import {
  groupTasksByName,
  sumElapsedTimes,
  findTimeFrame,
} from '../../services'
import TimeFrame from './TimeFrame'

interface Props {
  tasks: Task[]
  wip: Wip
}

export default function TasksPage({ tasks, wip }: Props) {
  const taskGroups = [...groupTasksByName(tasks).entries()]
  return (
    <Main>
      <List
        items={taskGroups}
        genKey={([name, _]) => name}
        render={([name, tasks]) => (
          <TaskItem
            name={name}
            headline={<TimeFrame {...findTimeFrame(tasks)} />}
            time={<ElapsedTime millis={sumElapsedTimes(tasks)} />}
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
  overflow: hidden;
`
