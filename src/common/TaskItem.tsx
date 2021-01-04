import styled from 'styled-components/macro'

interface Props {
  name: string
  time: JSX.Element
  headline: JSX.Element
}

export default function TaskItem({ name, time, headline }: Props) {
  return (
    <TaskWrapper>
      {headline}
      <Name>{name}</Name>
      {time}
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
