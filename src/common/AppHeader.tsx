import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function AppHeader() {
  return (
    <Header>
      <h1>TimeTracks</h1>
      <nav>
        <NavLink to="/wip">WIP</NavLink>
        <NavLink to="/timesheet">Timesheet</NavLink>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  padding: 16px;
  display: grid;
  grid-gap: 16px;

  h1 {
    margin: 0;
  }

  nav {
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    grid-gap: 16px;
  }

  a {
    text-decoration: none;
    color: #eee;
    border-bottom: 2px solid transparent;
  }

  a.active {
    font-weight: 600;
    border-color: deeppink;
  }
`
