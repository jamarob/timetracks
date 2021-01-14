import { Task } from '../models'

export default function groupTasksByName(tasks: Task[]): Map<string, Task[]> {
  return tasks.reduce((groups, task) => {
    const group = groups.get(task.name)
    if (group) {
      group.push(task)
    } else {
      groups.set(task.name, [task])
    }
    return groups
  }, new Map<string, Task[]>())
}
