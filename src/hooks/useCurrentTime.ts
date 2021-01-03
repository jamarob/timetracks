import { useEffect, useState } from 'react'

export default function useCurrentTime() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearTimeout(timerId)
  }, [])

  return now
}
