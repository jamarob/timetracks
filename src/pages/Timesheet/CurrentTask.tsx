import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

import { useCurrentTime } from '../../hooks'
import { Wip } from '../../models'
import TaskItem from './TaskItem'

interface Props {
  wip: Wip
}

export default function CurrentTask({ wip }: Props) {
  const now = useCurrentTime()

  if (!wip.start) {
    return null
  }

  return (
    <WipLink to="/wip">
      <TaskItem
        name={wip.name}
        start={wip.start}
        end={now}
        headline={<Headline>current</Headline>}
      />
    </WipLink>
  )
}

const WipLink = styled(NavLink)`
  padding: 8px 16px;
  border-top: 2px solid #111;
  text-decoration: none;
  color: #eee;
`

const Headline = styled.span`
  color: hotpink;
`
