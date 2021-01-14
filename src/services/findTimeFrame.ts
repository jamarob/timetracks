import { Task } from '../models'

interface TimeFrame {
  start: Date
  end: Date
}

export default function findTimeFrame(tasks: Task[]): TimeFrame {
  if (tasks.length === 0) {
    const epoche = new Date(0)
    return { start: epoche, end: epoche }
  }
  let earliestStartTime = tasks[0].start.getTime()
  let latestEndTime = tasks[0].end.getTime()
  let startTime, endTime
  for (let i = 1; i < tasks.length; i++) {
    startTime = tasks[i].start.getTime()
    if (earliestStartTime > startTime) {
      earliestStartTime = startTime
    }
    endTime = tasks[i].end.getTime()
    if (latestEndTime < endTime) {
      latestEndTime = endTime
    }
  }
  return { start: new Date(earliestStartTime), end: new Date(latestEndTime) }
}
