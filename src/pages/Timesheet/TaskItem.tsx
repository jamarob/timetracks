import styled from 'styled-components/macro'

import { ElapsedTime } from '../../common'

interface Props {
  name: string
  start: Date
  end: Date
  headline: JSX.Element
}

export default function TaskItem({ name, start, end, headline }: Props) {
  return (
    <TaskWrapper>
      {headline}
      <Name>{name}</Name>
      <ElapsedTime start={start} end={end} />
    </TaskWrapper>
  )
}

const TaskWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr min-content;

  > :first-child {
    font-size: 0.5em;
    text-transform: uppercase;
    grid-column: span 2;
  }
`

const Name = styled.span`
  font-weight: 600;
`
