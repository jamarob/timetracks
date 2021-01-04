import { Task } from '../models'
import sumElapsedTimes from './sumElapsedTimes'

test('it returns zero when given no tasks', () => {
  // given
  const tasks: Task[] = []

  // when
  const actual = sumElapsedTimes(tasks)

  // then
  expect(actual).toBe(0)
})

test('it sums the elapsed times', () => {
  // given
  const tasks = [
    {
      name: 'Task 1',
      start: new Date('2021-01-04T09:37:10.131Z'),
      end: new Date('2021-01-04T10:37:10.131Z'),
    },
    {
      name: 'Task 2',
      start: new Date('2021-01-04T10:37:10.131Z'),
      end: new Date('2021-01-04T11:00:10.131Z'),
    },
    {
      name: 'Task 3',
      start: new Date('2021-01-04T11:00:10.131Z'),
      end: new Date('2021-01-04T11:00:55.131Z'),
    },
  ]

  // when
  const actual = sumElapsedTimes(tasks)

  // then
  const SECONDS = 1000
  const MINUTES = SECONDS * 60
  const HOURS = MINUTES * 60
  expect(actual).toBe(1 * HOURS + 23 * MINUTES + 45 * SECONDS)
})
