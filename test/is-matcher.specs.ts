import 'mocha'
import fc from 'fast-check'
import { isMatcher } from '../src/isMatcher'
import { generateMatcher } from './generators'

describe('isMatcher', () => {
  it('should return', () => {
    fc.assert(fc.property(generateMatcher, isMatcher), {numRuns: 1000})
  }).timeout(10_000)
})
