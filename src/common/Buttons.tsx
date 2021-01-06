import { FaTimes, FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import styled from 'styled-components/macro'

interface Props {
  disabled?: boolean
  onClick: () => void
  title?: string
}

export function ClearButton(props: Props) {
  return (
    <SecondaryButton {...props}>
      <FaTimes />
    </SecondaryButton>
  )
}

export function PlayButton(props: Props) {
  return (
    <PrimaryButton {...props}>
      <FaPlayCircle />
    </PrimaryButton>
  )
}

export function PauseButton(props: Props) {
  return (
    <PrimaryButton {...props}>
      <FaPauseCircle />
    </PrimaryButton>
  )
}

const Button = styled.button`
  display: grid;
  place-items: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`

const SecondaryButton = styled(Button)`
  color: #eee;
  font-size: 24px;
  padding: 8px;

  &:disabled {
    color: #666;
  }
`

const PrimaryButton = styled(Button)`
  font-size: 80px;
  color: #222;
  background: deeppink;
  border: 4px solid deeppink;
  border-radius: 50%;
`
