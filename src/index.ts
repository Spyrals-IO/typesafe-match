import { transformer } from './transformer'

import type { Match } from './Match'
import type { Constructor } from './Constructor'

export declare function Constructor<T>(): Constructor<T>
export declare function Match<T extends {__type: string}>(): Match<T>

export default transformer