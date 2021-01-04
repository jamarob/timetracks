import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

import { Logo } from '../assets'

export default function AppHeader() {
  return (
    <Header>
      <Heading>
        <Logo />
        <h1>TimeTracks</h1>
      </Heading>
      <Nav>
        <PageLink to="/wip">WIP</PageLink>
        <PageLink to="/tasks">Tasks</PageLink>
        <PageLink to="/timesheet">Timesheet</PageLink>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  padding: 8px 16px;
  display: grid;
  grid-gap: 8px;
`

const Heading = styled.section`
  display: flex;
  align-items: baseline;

  h1 {
    margin: 0;
    margin-left: 8px;
  }
`

const Nav = styled.nav`
  display: grid;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
  grid-gap: 16px;
`

const PageLink = styled(NavLink)`
  text-decoration: none;
  color: #eee;
  border-bottom: 2px solid transparent;

  &.active {
    font-weight: 600;
    border-color: deeppink;
  }
`
