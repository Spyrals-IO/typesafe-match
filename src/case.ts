import { doesMatch } from "./does-match"

export const matchCase = <Target>(target: Target) => <T extends Partial<Target>, Return>(handler: (value: T) => Return) => (value: T): Return | null =>
  doesMatch(target as unknown as object, value) ? handler(value) : null

export const defaultCase = <T, Return>(handler: (value: T) => Return) => (value: T): Return | null =>
  handler(value)