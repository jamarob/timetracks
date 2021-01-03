export function saveToLocal<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

type Reviver = (key: string, value: any) => any

export function loadFromLocal<T>(
  key: string,
  reviver: Reviver,
  defaultValue: T
): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) {
      return defaultValue
    }
    return JSON.parse(raw, reviver)
  } catch (error) {
    return defaultValue
  }
}
