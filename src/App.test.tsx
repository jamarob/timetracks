import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  localStorage.clear()
})

test('renders TimeTracks heading', () => {
  render(
    <Router>
      <App />
    </Router>
  )
  const linkElement = screen.getByRole('heading', { name: /timetracks/i })
  expect(linkElement).toBeInTheDocument()
})

test('after starting a task the stop button is visible', () => {
  render(
    <Router>
      <App />
    </Router>
  )

  userEvent.type(screen.getByTestId('task-input'), 'My sweet task')
  userEvent.click(screen.getByRole('button', { name: /start/i }))

  expect(screen.getByText(/my sweet task/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument()
})

test('after starting a task it is displayed as current task on the timesheet', () => {
  render(
    <Router>
      <App />
    </Router>
  )

  userEvent.type(screen.getByTestId('task-input'), 'My sweet task')
  userEvent.click(screen.getByRole('button', { name: /start/i }))

  userEvent.click(screen.getByRole('link', { name: /timesheet/i }))

  expect(screen.getByText(/current/i)).toBeInTheDocument()
  expect(screen.getByText(/my sweet task/i)).toBeInTheDocument()
})

test('finished task is visible on the timesheet', () => {
  render(
    <Router>
      <App />
    </Router>
  )

  userEvent.type(screen.getByTestId('task-input'), 'My sweet task')
  userEvent.click(screen.getByRole('button', { name: /start/i }))
  userEvent.click(screen.getByRole('button', { name: /pause/i }))

  userEvent.click(screen.getByRole('link', { name: /timesheet/i }))

  expect(screen.queryByText(/current/i)).not.toBeInTheDocument()
  expect(screen.getByText(/my sweet task/i)).toBeInTheDocument()
})

test('current task on the timesheet links to wip page', () => {
  render(
    <Router>
      <App />
    </Router>
  )

  userEvent.type(screen.getByTestId('task-input'), 'My sweet task')
  userEvent.click(screen.getByRole('button', { name: /start/i }))

  userEvent.click(screen.getByRole('link', { name: /timesheet/i }))
  userEvent.click(screen.getByText(/current/i))

  expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument()
})
