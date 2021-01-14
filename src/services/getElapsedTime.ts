const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

export function getElapsedTime(millis: number): string
export function getElapsedTime(start: Date, end: Date): string
export default function getElapsedTime(...args: any[]): string {
  let time
  if (typeof args[0] === 'number') {
    time = args[0]
  } else {
    time = args[1].getTime() - args[0].getTime()
  }
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
