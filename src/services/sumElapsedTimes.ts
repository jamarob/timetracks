import { Task } from '../models'

export default function sumElapsedTimes(tasks: Task[]) {
  return tasks.reduce((sum, task) => {
    return sum + (task.end.getTime() - task.start.getTime())
  }, 0)
}
