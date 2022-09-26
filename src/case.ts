import { doesMatch } from "./does-match"

type MatchCondition<Product extends object> = (value: Product) => boolean

export const iff = <Product extends object>(c: MatchCondition<Product>): MatchCondition<Product> => c

// Case if made off of a validation function and a handler to execute in case (pun intended) of match.
export type Case<Product, Return> = [(value: Product) => boolean, (value: Product) => Return]

// MatchCase
export function matchCase<Target extends object>(target: Target): <Product extends object, Return>(handler: (value: Product) => Return) => Case<Product, Return>

export function matchCase<Target extends object, Product extends object>(target: Target, condition: MatchCondition<Product>): <Return>(handler: (value: Product) => Return) => Case<Product, Return>

export function matchCase(...params: ReadonlyArray<any>){
  const [target, maybeCondition] = params
  if(maybeCondition){
    return (handler: any) => [(value: any) => maybeCondition(value) && doesMatch(target, value), handler]
  } else{
    return (handler: any) => [(value: any) => doesMatch(target, value), handler]
  }
}

// DefaultCase
export function defaultCase<Product extends object, Return>(handler: (value: Product) => Return): Case<Product, Return>

export function defaultCase<Product extends object, Return>(condition: MatchCondition<Product>, handler: (value: Product) => Return): Case<Product, Return>

export function defaultCase(...params: ReadonlyArray<unknown>){
  const [param1, param2] = params
  return param2 ? params : [() => true, param1]
}
