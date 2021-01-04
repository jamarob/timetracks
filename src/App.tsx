import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'

import { AppHeader } from './common'
import { NewWip, CurrentWip, Timesheet } from './pages'
import { useTasks } from './hooks'

export default function App() {
  const { wip, tasks, startTask, stopTask } = useTasks()

  return (
    <PageLayout>
      <AppHeader />
      <Switch>
        <Route
          path="/wip"
          render={() =>
            wip.start ? (
              <CurrentWip wip={wip} onStop={stopTask} />
            ) : (
              <NewWip task={wip.name} onStart={startTask} />
            )
          }
        />
        <Route
          path="/timesheet"
          render={() => <Timesheet tasks={tasks} wip={wip} />}
        />
        <Route path="/" render={() => <Redirect to="/wip" />} />
      </Switch>
    </PageLayout>
  )
}

const PageLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
  background: #111;
  color: #eee;
`
