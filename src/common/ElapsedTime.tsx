import { calculateElapsedTime } from '../services'

interface Props {
  start: Date
  end: Date
}

export default function ElapsedTime({ start, end }: Props) {
  return <time>{calculateElapsedTime(start, end)}</time>
}
