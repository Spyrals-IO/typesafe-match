export const includes = <T>(array: Array<T>, searchElement: T): boolean =>
  array.findIndex((element) => element === searchElement) !== -1
