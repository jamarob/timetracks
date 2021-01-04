import styled from 'styled-components/macro'

import { ClearButton } from '../../common'

interface Props {
  task: string
  setTask: (task: string) => void
}

export default function TaskInput({ task, setTask }: Props) {
  return (
    <InputGroup>
      <Input
        data-testid="task-input"
        type="text"
        placeholder="New task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <ClearButton
        disabled={task === ''}
        onClick={() => setTask('')}
        title="Clear"
      />
    </InputGroup>
  )
}

const InputGroup = styled.section`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`

const Input = styled.input`
  padding: 8px 28px 8px 8px;
  border-radius: 24px;
  outline: none;
  border: 2px solid transparent;

  :focus {
    border-color: deeppink;
  }
`
