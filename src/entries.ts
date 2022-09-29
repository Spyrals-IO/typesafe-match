export const entries = (obj: Record<string, unknown>): ReadonlyArray<[string, unknown]> => 
  Object.keys(obj).map(key => [key, obj[key]])
