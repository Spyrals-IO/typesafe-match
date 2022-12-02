import type { Union, List } from 'ts-toolbelt'

import type { Descriptor } from "./descriptors"

import { doesMatch } from "./does-match"

// Error message clarification
type DefaultCondition = () => true
type MatchCondition<Product> = (value: Product) => boolean

// Internal naming for clarity
export type Validator<Product> = MatchCondition<Product>
export type Handler<Product, Return> = (value: Product) => Return

export const iff = <Product extends object>(c: MatchCondition<Product>): MatchCondition<Product> => c

type RemoveNonDescriptor<Target extends Record<string, Descriptor<unknown> | unknown>> = Pick<Target, DescriptorKeys<Target, keyof Target>>

type DescriptorKeys<Target, KTarget extends keyof Target> =
 KTarget extends any // Take advantage of Distributive Conditional Types
  ? Target[KTarget] extends Descriptor<unknown>
    ? KTarget
    : never
  : never

/* Case if made off of a validation function and a handler to execute in case (pun intended) of match.
*
* Target is used in type level operation to type-check that a given set of cases, e.i, a given set of Record<string, Descriptor>
* describe the whole Product being matched on.
*
* We remove all non-descriptor field from Target as is does not give use more information
* for type-checking.
* We may need to revisite this to support union-types well.
*/
export type Case<Target extends Record<string, Descriptor<unknown> | unknown>, Product, Return> = 
  [
    RemoveNonDescriptor<Target>,
    MatchCondition<Product>,
    Handler<Product, Return>
  ]

// A default case is a case which condition always return true
export type DefaultCase<Product, Return> = [DefaultCondition, Handler<Product, Return>]


// MatchCase
export function matchCase<
  Target extends Record<string, Descriptor<unknown> | unknown>
>(target: Target): <
  Product extends object,
  Return
>(handler: (value: Product) => Return) => Case<Target, Product, Return>

export function matchCase<
  Target extends Record<string, Descriptor<unknown> | unknown>,
  Product extends object
>(target: Target, condition: MatchCondition<Product>): <
  Return
>(handler: (value: Product) => Return) => Case<Target, Product, Return>

export function matchCase(...params: ReadonlyArray<any>){
  const [target, maybeCondition] = params
  if(maybeCondition){
    return (handler: any) => [(value: any) => maybeCondition(value) && doesMatch(target, value), handler]
  } else{
    return (handler: any) => [(value: any) => doesMatch(target, value), handler]
  }
}

// DefaultCase
export function defaultCase<
  Product extends object, Return
>(handler: (value: Product) => Return): DefaultCase<Product, Return>

export function defaultCase<
  Product extends object,
  Return
>(condition: MatchCondition<Product>, handler: (value: Product) => Return): DefaultCase<Product, Return>

export function defaultCase(...params: ReadonlyArray<unknown>){
  const [param1, param2] = params
  return param2 ? params : [() => true, param1]
}

type IntersectDescriptorsOfCases<
  Cases extends ReadonlyArray<Case<Record<string, Descriptor<unknown>>, object, unknown>>
> = Union.IntersectOf<List.UnionOf<{
  [K in keyof Cases]: Cases[K][0]
}>>

// Build a new array of cases, changing only the First parameter to the intersection of all descriptors in this 
// list of cases.
type StrictOneOf<
  Cases extends ReadonlyArray<Case<Record<string, Descriptor<unknown>>, object, unknown>>
> = {
  [K in keyof Cases]: [
    IntersectDescriptorsOfCases<Cases> & Record<string, Descriptor<unknown>>,
    Cases[K][1],
    Cases[K][2]
  ]
}

// Notes:
// any in the below type is mandatory.
// if we use object or Product or even unknown / never the compiler will refuse
// as Case use it as a function parameter. In TS these are contravariant by design but
// its impossible to mark this type 'Cases' as contravariant or Invariant.
// Therefore ts take it as co-variant by default and refuse to compile.
// any being the only bivarant type in the type-system it's mandatory to force
// type-checking here.

/**
 * One of this cases needs to match the value.
 */
export function oneOf<
  Cases extends ReadonlyArray<Case<Record<string, Descriptor<unknown>>, any, unknown>>
>(...cases: Cases): StrictOneOf<Cases>

export function oneOf<
  Cases extends [...Array<Case<Record<string, unknown>, any, unknown>>, DefaultCase<any, unknown>]
>(...cases: Cases): Cases

export function oneOf(...cases: ReadonlyArray<unknown>){
  return cases
}
