const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}

interface Props {
  time: Date
}

export default function StartTime({ time, ...rest }: Props) {
  return <time {...rest}>{time.toLocaleString(undefined, options)}</time>
}
