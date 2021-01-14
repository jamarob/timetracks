interface Props {
  start: Date
  end: Date
}

const longDateAndTime = {
  weekday: 'long',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}

const shortDateAndTime = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}

const justTime = {
  hour: '2-digit',
  minute: '2-digit',
}

export default function TimeFrame({ start, end }: Props) {
  if (start.toDateString() === end.toDateString()) {
    return (
      <section>
        <time>{start.toLocaleString(undefined, longDateAndTime)}</time>
        {' - '}
        <time>{end.toLocaleString(undefined, justTime)}</time>
      </section>
    )
  }
  return (
    <section>
      <time>{start.toLocaleString(undefined, shortDateAndTime)}</time>
      {' - '}
      <time>{end.toLocaleString(undefined, shortDateAndTime)}</time>
    </section>
  )
}
