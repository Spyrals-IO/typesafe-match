import 'mocha'
import fc from 'fast-check'
import { isHandler } from '../src/isMatcher'
import { functionOneOrNoParam } from './generators'

describe('isHandler', () => {
  it('should return type of function (false if not corresponding)', () => {
    fc.assert(fc.property(functionOneOrNoParam, (a) => {isHandler(a)}), {numRuns: 1000})
  }).timeout(100_000)
})
