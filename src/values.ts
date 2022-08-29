export const values = (obj: any): any[] =>
  Object.keys(obj).map(key => obj[key])
