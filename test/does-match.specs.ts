import 'mocha'
import fc from 'fast-check'
import { doesMatch } from '../src/does-match'
import { valueAndTarget, valueAndTargetWithDifferentKeys, valueAndTargetSameKeysDifferentValues } from './generators'
import { values } from '../src/values';

describe('doesMatch', () => {
  it('should return true when target\'s keys are a subset of value\'s keys with same values', () => {
    fc.assert(fc.property(valueAndTarget, ([t, v]) => { fc.pre(!values(t).some(Number.isNaN)); doesMatch(t, v) }), {numRuns: 10_000})
  }).timeout(10_000)
  it('should return false when target\'s keys are different from value\'s keys with or without same values', () => {
    fc.assert(fc.property(valueAndTargetWithDifferentKeys, ([t, v]) => !doesMatch(t,v)), {numRuns: 10_000})
  }).timeout(10_000)
  it('should return false when target\'s keys are identical from value\'s keys with different values', () => {
    fc.assert(fc.property(valueAndTargetSameKeysDifferentValues, ([t, v]) => !doesMatch(t,v)), {numRuns: 10_000})
  }).timeout(100_000)
})
