import styled from 'styled-components/macro'

import { IconButton, ElapsedTime, StartTime } from '../../common'
import { useCurrentTime } from '../../hooks'
import { assert } from '../../libs'
import { Wip } from '../../models'

interface Props {
  wip: Wip
  onStop: () => void
}

export default function StopWip({ wip, onStop }: Props) {
  assert(wip.start, 'Task not started')

  const now = useCurrentTime()

  return (
    <Main>
      <WipWrapper>
        <StartTime time={wip.start} />
        <h2>{wip.name}</h2>
        <ElapsedTime start={wip.start} end={now} />
      </WipWrapper>
      <IconButton onClick={onStop} icon="stop" size="80px" />
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
`

const WipWrapper = styled.section`
  text-align: center;

  time:first-child {
    font-size: 0.5em;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 0;
  }
`
