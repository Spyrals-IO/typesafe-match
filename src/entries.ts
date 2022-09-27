export const entries = (obj: Record<string, unknown>): ReadonlyArray<[string, unknown]> => 
  Object.keys(obj).map(key => [key, obj[key]])

export const fromEntries = (entries: ReadonlyArray<[string, unknown]>): Record<string, unknown> =>
  entries.reduce((acc, [key, value]) => ({...acc, [key]: value}), {})