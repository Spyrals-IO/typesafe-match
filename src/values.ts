export const values = (obj: object): any[] => {
  return Object.keys(obj).map(key => obj[key])
}
