import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ElapsedTime } from '.'

import { useCurrentTime } from '../hooks'
import { Wip } from '../models'
import TaskItem from './TaskItem'

interface Props {
  wip: Wip
}

export default function CurrentWip({ wip }: Props) {
  const now = useCurrentTime()

  if (!wip.start) {
    return null
  }

  return (
    <WipLink to="/wip">
      <TaskItem
        name={wip.name}
        time={<ElapsedTime start={wip.start} end={now} />}
        headline={<Headline>current</Headline>}
      />
    </WipLink>
  )
}

const WipLink = styled(NavLink)`
  padding: 8px 16px;
  border-top: 1px solid deeppink;
  text-decoration: none;
  color: #eee;
`

const Headline = styled.span`
  color: hotpink;
`
