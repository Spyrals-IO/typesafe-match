import type { Union, List } from 'ts-toolbelt'

type __Members<T, K extends List.Readonly<Array<unknown>>> = 
  ((...args: K) => unknown) extends ((head: infer Head, ...tail: infer Tail) => unknown)
  ? Head extends keyof T
    ? [T[Head], __Members<T, Tail>]
    : []
  : []

type Members<T> = List.Flatten<__Members<T, Union.ListOf<keyof T>>>

//Extends infer actualy affect the variable, forcing the type to be computed before using it.
//It prevents the `Type instantiation is excessively deep and possibly infinite` error.
export type Constructor<T> = Members<Omit<T, "__type">> extends infer Args ? Args extends Array<unknown> ? (...args: Args) => T : never : never