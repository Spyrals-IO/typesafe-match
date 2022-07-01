import * as chai from 'chai'
import 'mocha'
chai.should()
const expect = chai.expect
import fc, { object, nat, tuple, constant } from 'fast-check'

import { deepEquals, doesMatch } from './sample'

function shuffle<T>(array: Array<T>): Array<T> {
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}


const valueAndTarget = object().chain(vTest => 
	tuple(nat(Object.keys(vTest).length).map(rand => 
			shuffle(Object.entries(vTest))
					.reduce<Record<string, unknown>>( (acc, [k, v], index) => {
							if (index > rand) {
									acc[k] = v
							}
							return acc
					}, {} )
	), constant(vTest))
)

const valueAndTargetWithDifferentKeys = tuple(object(),object()).filter(([potentialValue, potentialTarget]) =>
	Object.keys(potentialValue).length > 0 && Object.keys({...potentialValue, ...potentialTarget}).length === Object.keys(potentialValue).length + Object.keys(potentialTarget).length
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

const twoObjectsEqualsInContent = tuple(object(), object()).filter(([a, b]) =>
		Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(element => Object.keys(b).includes(element)) && Object.values(a).every(element => Object.values(b).includes(element) && Object.keys(b).every(element => Object.keys(a).includes(element))) && Object.values(b).every(element => Object.values(a).includes(element))
)

const twoObjectsInequalsInContent = tuple(object(), object()).filter(([a, b]) =>
		Object.keys(a).length !== Object.keys(b).length
)

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

describe('doesMatch', () => {
	it('should return true when target\'s keys are a subset of value\'s keys with same values', () => {
		fc.assert(fc.property(valueAndTarget, ([t, v]) => { fc.pre(!Object.values(t).some(Number.isNaN)); doesMatch(t, v) }), {numRuns: 10_000})
	}).timeout(10_000)
	it('should return false when target\'s keys are different from value\'s keys with or without same values', () => {
		fc.assert(fc.property(valueAndTargetWithDifferentKeys, ([t, v]) => !doesMatch(t,v)), {numRuns: 10_000})
	}).timeout(10_000)
	it('should return false when target\'s keys are identical from value\'s keys with different values', () => {
		fc.assert(fc.property(valueAndTargetSameKeysDifferentValues, ([t, v]) => !doesMatch(t,v)), {numRuns: 10_000})
	}).timeout(100_000)
})
