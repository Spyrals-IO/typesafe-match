import { doesMatch } from "./does-match"

type MatchCondition<Product extends object> = (value: Product) => boolean

export const iff = <Product extends object>(c: MatchCondition<Product>): MatchCondition<Product> => c

// Case if made off of a validation function and a handler to execute in case (pun intended) of match.
export type Case<Product, Return> = [(value: Product) => boolean, (value: Product) => Return]

export const matchCase = <Target extends object, Product extends object>(
  target: Target,
  condition: MatchCondition<Product>
) => <Return>(
  handler: (value: Product) => Return
): Case<Product, Return> => [(value: Product) => condition(value) && doesMatch(target, value), handler]

export const defaultCase = <Product extends object, Return>(
  condition: MatchCondition<Product>,
  handler: (value: Product) => Return
): Case<Product, Return> => [condition, handler]
