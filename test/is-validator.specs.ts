import 'mocha'
import fc from 'fast-check'
import { isValidator } from '../src/isMatcher'
import { generateValidator } from './generators'

describe('isValidator', () => {
  it('should return', () => {
    fc.assert(fc.property(generateValidator, isValidator), {numRuns: 1000})
  }).timeout(10_000)
})
