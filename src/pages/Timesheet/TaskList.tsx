import styled from 'styled-components/macro'

import { StartTime } from '../../common'
import { Task } from '../../models'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
}

export default function TaskList({ tasks }: Props) {
  return (
    <List>
      {tasks.map((task) => (
        <li key={task.start.getTime()}>
          <TaskItem {...task} headline={<StartTime time={task.start} />} />
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  margin: 0;
  padding: 16px;
  list-style: none;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 16px;
  overflow-y: scroll;

  li:last-child::after {
    content: '';
    display: block;
    height: 16px;
  }
`
