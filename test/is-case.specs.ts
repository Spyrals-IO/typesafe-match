import 'mocha'
import fc from 'fast-check'
import { isCase } from '../src/isMatcher'
import { generateCase } from './generators'

describe('isCase', () => {
  it('should return', () => {
    fc.assert(fc.property(generateCase, isCase), {numRuns: 1000})
  }).timeout(10_000)
})
