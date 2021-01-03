import calculateElapsedTime from './calculateElapsedTime'

test('it returns 00:00:00 if start and end are the same date', () => {
  // given
  const now = new Date()

  // when
  const actual = calculateElapsedTime(now, now)

  // then
  expect(actual).toBe('00:00:00')
})

test('it returns the time difference in HH:MM:SS format', () => {
  // given
  const start = new Date()
  const end = new Date(start)
  end.setHours(start.getHours() + 1)
  end.setMinutes(start.getMinutes() + 23)
  end.setSeconds(start.getSeconds() + 45)

  // when
  const actual = calculateElapsedTime(start, end)

  // then
  expect(actual).toBe('01:23:45')
})
