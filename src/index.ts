import { transformer } from './transformer'
import { separate } from './separate'

import type { Match } from './Match'
import type { Constructor } from './Constructor'

export declare function Constructor<T>(): Constructor<T>

export function Match<T extends Product<string>>(): Match<T> {
  return ((matcherOrValue: any) => (valueOrMatcher: any) => {
    const [matcher, value] = separate(matcherOrValue, valueOrMatcher)
    // find the top-level matcher for this type
    const caseOrArrayMatcher = matcher[value.__type]
    if(Array.isArray(caseOrArrayMatcher)) {
      // The matcher contains sub-matcher
      const [, handler] = caseOrArrayMatcher.find(([validator]) => validator(value))
      return handler(value)
    } else { 
      // The matcher was a simple handler
      const handler = caseOrArrayMatcher || matcher._
      return handler(value)
    }
  }) as any as Match<T>
}

export interface Product<Name> {
  __type: Name
}

export default transformer