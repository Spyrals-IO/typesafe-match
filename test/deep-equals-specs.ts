import * as chai from 'chai'
import 'mocha'
chai.should()
import fc, { object, tuple } from 'fast-check'
import { deepEquals } from '../src/deep-equals'

const twoObjectsEqualsInContent = tuple(object(), object()).filter(([a, b]) =>
		Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(element => Object.keys(b).includes(element)) && Object.values(a).every(element => Object.values(b).includes(element) && Object.keys(b).every(element => Object.keys(a).includes(element))) && Object.values(b).every(element => Object.values(a).includes(element))
)

const twoObjectsInequalsInContent = tuple(object(), object()).filter(([a, b]) =>
		Object.keys(a).length !== Object.keys(b).length
)

const valueAndTargetSameKeysDifferentValues = tuple(object(), object()).filter(([potentialValue, potentialTarget]) =>
		Object.keys(potentialValue).length > 0 && Object.keys(potentialTarget).every(element =>
			Object.keys(potentialValue).includes(element) && !ifObjectDeepEqual(potentialValue[element], potentialTarget[element])// Do they have the same keys and these keys have different values
		)	
)

const ifObjectDeepEqual = (a: unknown, b: unknown): boolean => {
	if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null)
		return deepEquals(a, b)
	else
		return a === b
}

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