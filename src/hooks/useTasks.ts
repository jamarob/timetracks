import { useEffect, useState } from 'react'
import { loadTasks, loadWip, saveTasks, saveWip } from '../dao'
import { assert } from '../libs'

import { Task, Wip } from '../models'

const unnamed = 'Unnamed'

export default function useTasks() {
  const [wip, setWip] = useState<Wip>(loadWip())
  const [tasks, setTasks] = useState<Task[]>(loadTasks)

  useEffect(() => {
    saveWip(wip)
  }, [wip])

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const startTask = (name: string) => {
    setWip({ name: name || unnamed, start: new Date() })
  }

  const stopTask = () => {
    assert(wip.start, 'No task started')
    const { name, start } = wip
    const newTask: Task = { name, start, end: new Date() }
    setTasks([...tasks, newTask])
    setWip({ name: wip.name === unnamed ? '' : wip.name })
  }

  return { wip, tasks, startTask, stopTask }
}
