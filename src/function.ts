export const and = <
  P,
  T1 extends P, T2 extends P
>(
  f1: (value: P) => value is T1, 
  f2: (value: P) => value is T2
): (value: P) => value is T1 & T2 => (value): value is T1 & T2 => f1(value) && f2(value)

export const or = <
  P,
  T1 extends P, T2 extends P
>(
  f1: (value: P) => value is T1, 
  f2: (value: P) => value is T2
): (value: P) => value is T1 | T2 => (value): value is T1 | T2 => f1(value) || f2(value)
