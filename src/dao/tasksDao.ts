import { Task } from '../models'
import { loadFromLocal, saveToLocal } from '../libs'

const TASKS_KEY = 'tasks'
const initialTasks: Task[] = []

export function saveTasks(tasks: Task[]) {
  saveToLocal(TASKS_KEY, tasks)
}

export function loadTasks(): Task[] {
  try {
    return loadFromLocal(TASKS_KEY, taskReviver, initialTasks)
  } catch (error) {
    return initialTasks
  }
}

function taskReviver(key: string, value: any) {
  if (key === 'start' || key === 'end') {
    return new Date(value)
  }
  return value
}
