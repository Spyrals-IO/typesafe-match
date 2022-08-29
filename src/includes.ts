export const includes = <T>(array: ReadonlyArray<T>, searchElement: T): boolean =>
  array.indexOf(searchElement) !== -1
