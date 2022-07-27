export const entries = (obj: any): Array<any[]> => {
  return Object.keys(obj).map(key => [key, obj[key]])
}
