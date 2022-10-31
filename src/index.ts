import { transformer } from './transformer'
import { separate } from './separate'

import type { Match } from './Match'
import type { Constructor } from './Constructor'

export declare function Constructor<T>(): Constructor<T>

export function Match<T extends Product<string>>(): Match<T> {
  return ((matcherOrMatchOn: any) => (matchOnOrMatcher: any) => {
    const [matcher, matchOn] = separate(matcherOrMatchOn, matchOnOrMatcher)
    // find the top-level matcher for this type
    const caseOrArrayMatcher = matcher[matchOn.__type]
    console.log("matcher", matcher)
    console.log("caseOrArrayMatcher", caseOrArrayMatcher)
    if(Array.isArray(caseOrArrayMatcher)) {
      // The matcher contains sub-matcher
      console.log("matchOn", matchOn)
      const [, handler] = caseOrArrayMatcher.find(([validator]) => validator(matchOn))
      return handler(matchOn)
    } else { 
      // The matcher was a simple handler
      const handler = caseOrArrayMatcher || matcher._
      return handler(matchOn)
    }
  }) as any as Match<T>
}

export interface Product<Name> {
  __type: Name
}

export default transformer