export const zip = <T1, T2>(arr1: ReadonlyArray<T1>,  arr2: ReadonlyArray<T2>): ReadonlyArray<[T1, T2]> =>
  arr1.map((value1, index) => [value1, arr2[index]] as [T1, T2])
