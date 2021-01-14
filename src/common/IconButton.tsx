import styled from 'styled-components/macro'
import { FaRegPlayCircle, FaTimes, FaRegPauseCircle } from 'react-icons/fa'

type IconName = 'start' | 'stop' | 'clear'

interface Props {
  disabled?: boolean
  onClick: () => void
  size?: string
  icon: IconName
}

export default function IconButton({ icon, ...props }: Props) {
  return (
    <Button title={icon} {...props}>
      {getIcon(icon)}
    </Button>
  )
}

function getIcon(name: IconName): JSX.Element {
  switch (name) {
    case 'clear':
      return <FaTimes />
    case 'start':
      return <FaRegPlayCircle />
    case 'stop':
      return <FaRegPauseCircle />
  }
}

interface ButtonProps {
  size?: string
}

const Button = styled.button<ButtonProps>`
  display: grid;
  place-items: center;
  border: none;
  background: none;
  border-radius: 50%;
  cursor: pointer;

  font-size: ${({ size }) => size || 'default'};

  color: deeppink;

  &:disabled {
    cursor: default;
    color: pink;
  }
`
