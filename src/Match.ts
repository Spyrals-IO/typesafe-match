import type { Union, List } from 'ts-toolbelt'
import type { Case, DefaultCase, Handler } from './case'
import type { Descriptor } from "./descriptors"

export type Match<
  T extends {__type: string}
> = <Return>(
  matcherOrValue: Matcher<T, Return> | T
) => (
  valueOrMatcher: MatcherOrValue<typeof matcherOrValue, T, Return>
) => Return

type MatcherOrValue<MOrV, T extends {__type: string} , Return> = 
  MOrV extends {__type: string} 
  ? T
  : Matcher<T, Return>

// A Matcher is only a wildcard case, or matches with a wildcard case or a list of cases
type Matcher<T extends {__type: string}, Return> = WildcardMatch<T, Return> | MatchesWithWildcard<T, Return> | NamedMatches<Union.ListOf<T>, Return>

// The simplier one, a Matcher made of only the wildcard case
type WildcardMatch<Param, Return> = 
  { _: (match: Param) => Return }

// A Matcher made of named cases and a wildcard one.
type MatchesWithWildcard<All extends {__type: string}, Return> = WildcardMatch<All, Return> & NamedMatch<All, Return>

// A full matcher, each key is one of the possible Product names.
type NamedMatches<T extends ReadonlyArray<{__type: string}>, Return> = {
  0 : NamedMatch<T[0], Return>,
  1 : NamedMatch<T[0], Return> & NamedMatches<List.Tail<T>, Return>,
}[T[1] extends undefined ? 0 : 1]

// One of the Product cases. It's key is the name of the type and its value is either an Handler either a CaseList
type NamedMatch<Param extends {__type: string}, Return> = 
  Record<Param["__type"], Handler<Param, Return> | CaseList<Param, Return>>

// A List of cases that a Param is tested against. The Product is known at this point but there can be multiple way of describing the cases.
// It's either a list of cases of which the matcher fully describe the Product, or a list of partial case followed by a default.
type CaseList<Param extends {__type: string}, Return> = 
  PartialCasesWithDefault<Param, Return> | FullCases<Param, Return>

type PartialCasesWithDefault<Param extends {__type: string}, Return> =
  [...Array<Case<Record<string, unknown>, Param, Return>>, DefaultCase<Param, Return>]

// An array of cases, they're internal matcher's union should be the Product type
type FullCases<Param extends {__type: string}, Return> =
  ReadonlyArray<Case<InternalMatcher<Param>, Param, Return>>

// The Internal matcher of a case, for a specific product, it should describe this product fully.
type InternalMatcher<Param extends {__type: string}> = {
  [K in keyof Omit<Param, '__type'>]: Descriptor<Param[K]>
}
