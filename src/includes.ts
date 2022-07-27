export const includes = (array: Array<any>, searchElement: any): boolean => {
  if (array.findIndex((element) => element === searchElement) === -1) {
    return false
  }  
  return true
}
