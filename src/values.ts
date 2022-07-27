export const values = (obj: any): any[] => {
  return Object.keys(obj).map(key => obj[key])
}
