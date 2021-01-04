import getElapsedTime from './getElapsedTime'

describe('with 2 dates', () => {

  test('it returns 00:00:00 if start and end are the same date', () => {
    // given
    const now = new Date()
    
    // when
    const actual = getElapsedTime(now, now)
    
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
    const actual = getElapsedTime(start, end)
    
    // then
    expect(actual).toBe('01:23:45')
  })
  
})

describe('with milliseconds', () => {
  test('it returns 00:00:00 when given less than 1000 milliseconds', () => {
    // given
    const millis = 999
    
    // when
    const actual = getElapsedTime(millis)
    
    // then
    expect(actual).toBe('00:00:00')
  })

  test('it returns the time in HH:MM:SS format', () => {
    // given
    const SECONDS = 1000
    const MINUTES = SECONDS * 60
    const HOURS = MINUTES * 60
    const millis = 1 * HOURS + 23 * MINUTES + 45 * SECONDS

    // when
    const actual = getElapsedTime(millis)

    // then
    expect(actual).toBe("01:23:45")
  })
})