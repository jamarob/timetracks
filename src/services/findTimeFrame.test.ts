import { Task } from '../models'
import findTimeFrame from './findTimeFrame'

test('given no tasks, it returns epoche as start and end time', () => {
  // given
  const tasks: Task[] = []

  // when
  const actual = findTimeFrame(tasks)

  // then
  const epoche = new Date(0)
  expect(actual).toEqual({ start: epoche, end: epoche })
})

test('it finds earliest start date and latest and date', () => {
  // given
  const tasks: Task[] = [
    {
      name: 'Some task',
      start: new Date(2020, 12, 4, 9, 37, 10),
      end: new Date(2020, 12, 4, 10, 0, 10),
    },
    {
      name: 'Another task',
      start: new Date(2020, 12, 7, 10, 0, 10),
      end: new Date(2020, 12, 7, 12, 0, 10),
    },
    {
      name: 'Another one',
      start: new Date(2020, 12, 30, 17, 30, 10),
      end: new Date(2020, 12, 30, 18, 30, 10),
    },
    {
      name: 'One more task',
      start: new Date(2021, 1, 4, 9, 30, 0),
      end: new Date(2021, 1, 4, 13, 27, 10),
    },
  ]

  // when
  const actual = findTimeFrame(tasks)

  // then
  expect(actual).toEqual({
    start: new Date(2020, 12, 4, 9, 37, 10),
    end: new Date(2021, 1, 4, 13, 27, 10),
  })
})
