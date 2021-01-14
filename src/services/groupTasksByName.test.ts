import { Task } from '../models'
import groupTasksByName from './groupTasksByName'

test('it returns an empty map when given no tasks', () => {
  // given
  const tasks: Task[] = []

  // when
  const actual = groupTasksByName(tasks)

  // then
  expect(actual.size).toBe(0)
})

test('it groups tasks by their name', () => {
  // given
  const taskA_1 = { name: 'Task A', start: new Date(), end: new Date() }
  const taskA_2 = { name: 'Task A', start: new Date(), end: new Date() }
  const taskA_3 = { name: 'Task A', start: new Date(), end: new Date() }
  const taskB_1 = { name: 'Task B', start: new Date(), end: new Date() }
  const taskB_2 = { name: 'Task B', start: new Date(), end: new Date() }
  const taskC_1 = { name: 'Task C', start: new Date(), end: new Date() }
  const taskD_1 = { name: 'Task D', start: new Date(), end: new Date() }
  const taskD_2 = { name: 'Task D', start: new Date(), end: new Date() }
  const taskD_3 = { name: 'Task D', start: new Date(), end: new Date() }

  // when
  const actual = groupTasksByName([
    taskA_1,
    taskA_3,
    taskD_1,
    taskA_2,
    taskB_1,
    taskC_1,
    taskB_2,
    taskD_3,
    taskD_2,
  ])

  // then
  expect(actual).toEqual(
    new Map<string, Task[]>([
      ['Task A', [taskA_1, taskA_2, taskA_3]],
      ['Task B', [taskB_1, taskB_2]],
      ['Task C', [taskC_1]],
      ['Task D', [taskD_1, taskD_2, taskD_3]],
    ])
  )
})
