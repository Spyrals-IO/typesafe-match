export const values = (obj: Record<string, unknown>): ReadonlyArray<unknown> =>
  Object.keys(obj).map(key => obj[key])
