import 'mocha'
import fc from 'fast-check'
import { isCasesOrHandler } from '../src/isMatcher'
import { generateHandlerOrArrayOfCases } from './generators'

describe('isCaseOrFunction', () => {
  it('should return', () => {
    fc.assert(fc.property(generateHandlerOrArrayOfCases, isCasesOrHandler), {numRuns: 1000})
  }).timeout(10_000)
})
