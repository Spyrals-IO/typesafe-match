import { doesMatch } from "./does-match"

// Case if made off of a validation function and a handler to execute in case (pun intended) of match.
export type Case<Product, Return> = [(value: Product) => boolean, (value: Product) => Return]

export const matchCase = <Target extends object>(
  target: Target
) => <Product extends object, Return>(
  handler: (value: Product) => Return
): Case<Product, Return> => [(value: Product) => doesMatch(target, value), handler]

export const defaultCase = <Product, Return>(handler: (value: Product) => Return): Case<Product, Return> => [() => true, handler]
