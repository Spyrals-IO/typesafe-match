import { doesMatch } from "./does-match"
import { number, defined, Descriptor } from "./descriptors"

// Error message clarification
type DefaultCondition = () => true
type MatchCondition<Product> = (value: Product) => boolean

export const iff = <Product extends object>(c: MatchCondition<Product>): MatchCondition<Product> => c

// Case if made off of a validation function and a handler to execute in case (pun intended) of match.
export type Case<Product, Return> = [MatchCondition<Product>, (value: Product) => Return]

// A default case is a case which condition always return true
export type DefaultCase<Product, Return> = [DefaultCondition, (value: Product) => Return]

// MatchCase
export function matchCase<Target extends Record<string, Descriptor<unknown>> | object>(target: Target): <Product extends object, Return>(handler: (value: Product) => Return) => Case<Product, Return>

export function matchCase<Target extends Record<string, Descriptor<unknown>> | object, Product extends object>(target: Target, condition: MatchCondition<Product>): <Return>(handler: (value: Product) => Return) => Case<Product, Return>

export function matchCase(...params: ReadonlyArray<any>){
  const [target, maybeCondition] = params
  if(maybeCondition){
    return (handler: any) => [(value: any) => maybeCondition(value) && doesMatch(target, value), handler]
  } else{
    return (handler: any) => [(value: any) => doesMatch(target, value), handler]
  }
}

// DefaultCase
export function defaultCase<Product extends object, Return>(handler: (value: Product) => Return): DefaultCase<Product, Return>

export function defaultCase<Product extends object, Return>(condition: MatchCondition<Product>, handler: (value: Product) => Return): DefaultCase<Product, Return>

export function defaultCase(...params: ReadonlyArray<unknown>){
  const [param1, param2] = params
  return param2 ? params : [() => true, param1]
}
