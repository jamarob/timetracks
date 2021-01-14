import { getElapsedTime } from '../services'

interface TimeSpan {
  start: Date
  end: Date
}

interface Millis {
  millis: number
}

export function ElapsedTime(timeSpan: TimeSpan): JSX.Element
export function ElapsedTime(millis: Millis): JSX.Element
export default function ElapsedTime(props: any): JSX.Element {
  if (typeof props.millis === 'number') {
    return <time>{getElapsedTime(props.millis)}</time>
  } else {
    return <time>{getElapsedTime(props.start, props.end)}</time>
  }
}
