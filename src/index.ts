import { transformer } from './transformer'
import { separate } from './separate'

import type { Match } from './Match'
import type { Constructor } from './Constructor'

export declare function Constructor<T>(): Constructor<T>

export function Match<T extends Product<string>>(matcherOrMatchOn: any, matchOnOrMatcher: any): Match<T> {
  const [matcher, matchOn] = separate(matcherOrMatchOn, matchOnOrMatcher)

  return ((matcher: any) => (matchOn: any) => {
    // find the top-level matcher for this type
    const caseOrArrayMatcher = matcher[matchOn.__type]

    if(Array.isArray(caseOrArrayMatcher)) {
      // The matcher contains sub-matcher
      const [, subMatcher] = caseOrArrayMatcher.find(([doesMatch]) => doesMatch(matchOn))
      return subMatcher(matchOn)
    } else {
      // The matcher was a simple handler
      const directMatcher = caseOrArrayMatcher || matcher._
      return directMatcher(matchOn)
    }
  }) as any as Match<T>
}

export interface Product<Name> {
  __type: Name
}

export default transformer