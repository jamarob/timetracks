const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

export default function calculateElapsedTime(
  start: Date,
  end: Date = new Date()
) {
  let time = end.getTime() - start.getTime()
  const hours = Math.floor(time / HOUR)
  time = time % HOUR
  const minutes = Math.floor(time / MINUTE)
  time = time % MINUTE
  const seconds = Math.floor(time / SECOND)

  const hh = padZero(hours)
  const mm = padZero(minutes)
  const ss = padZero(seconds)

  return `${hh}:${mm}:${ss}`
}

function padZero(number: number) {
  return number < 10 ? `0${number}` : number
}
