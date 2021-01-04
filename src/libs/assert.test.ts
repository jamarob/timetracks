import assert from './assert'

test('it is silent when the condition is met', () => {
  try {
    // given
    const condition = 1 + 1 === 2

    // when
    assert(condition)

    // then
    expect(true).toBe(true)
  } catch (error) {
    fail()
  }
})

test('it throws with an optional message if the condition is not met', () => {
  try {
    // given
    const condition = 1 + 1 === 3

    // when
    assert(condition, '2 is not 3')

    fail()
  } catch (error) {
    // then
    expect(error.message).toBe('2 is not 3')
  }
})
