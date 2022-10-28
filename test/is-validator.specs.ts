import 'mocha'
import fc from 'fast-check'
import { isValidator } from '../src/isMatcher'
import { functionReturningBooleanOneParam } from './generators'

describe('isValidator', () => {
  it('should return', () => {
    fc.assert(fc.property(functionReturningBooleanOneParam, (a) => {isValidator(a)}), {numRuns: 10})
  }).timeout(10_000)
})
