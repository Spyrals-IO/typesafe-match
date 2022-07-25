import { transformer } from './transformer'

import type { Match } from './Match'
import type { Constructor } from './Constructor'

export declare function Constructor<T>(): Constructor<T>

export function Match<T extends Product<string>>(): Match<T> {
  return ((matcher: any) => (matchOn: any) => (matcher[matchOn.__type] || matcher._)(matchOn)) as any as Match<T>
}

export interface Product<Name> {
  __type: Name
}

export default transformer