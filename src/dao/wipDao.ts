import { saveToLocal, loadFromLocal } from '../libs'
import { Wip } from '../models'

const WIP_KEY = 'wip'
const initialWip: Wip = { name: '' }

export function saveWip(wip: Wip) {
  saveToLocal(WIP_KEY, wip)
}

export function loadWip(): Wip {
  try {
    return loadFromLocal(WIP_KEY, wipReviver, initialWip)
  } catch (error) {
    return initialWip
  }
}

function wipReviver(key: string, value: any) {
  if (key === 'start') {
    return new Date(value)
  }
  return value
}
