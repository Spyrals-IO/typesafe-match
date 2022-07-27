export const entries = (obj: object): Array<any[]> => {
  return Object.keys(obj).map(key => [key, obj[key]])
}
