import 'mocha'
import fc from 'fast-check'
import { deepEquals } from '../src/deep-equals'
import { twoObjectsEqualsInContent, twoObjectsInequalsInContent, valueAndTargetSameKeysDifferentValues } from './generators'

describe('deepEquals', () => {
	it('should return true when two objects are equals in content order insensitive', () => {
		fc.assert(fc.property(twoObjectsEqualsInContent, ([a, b]) => {deepEquals(a, b)}), {numRuns: 1000})
	}).timeout(100_000)
	it('should return false when two objects are inequals in content', () => {
		fc.assert(fc.property(twoObjectsInequalsInContent, ([a, b]) => {!deepEquals(a, b)}), {numRuns: 1000})
	}).timeout(100_000)
	it('should return false when two objects are inequals in values but same keys', () => {
		fc.assert(fc.property(valueAndTargetSameKeysDifferentValues, ([a, b]) => {!deepEquals(a, b)}), {numRuns: 1000})
	}).timeout(100_000)
})
