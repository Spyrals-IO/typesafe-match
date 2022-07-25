import * as chai from 'chai'
import 'mocha'
chai.should()
import fc, { object, nat, tuple, constant } from 'fast-check'
import { doesMatch } from '../src/does-match'
import { deepEquals } from '../src/deep-equals'

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