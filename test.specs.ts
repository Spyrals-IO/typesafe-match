import * as chai from 'chai'
import 'mocha'
chai.should()
const expect = chai.expect
import fc, { object, nat, tuple, constant } from 'fast-check'

import { doesMatch } from './sample'

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
			Object.keys(potentialValue).includes(element) && potentialValue[element] !== potentialTarget[element] // Do they have the same keys and these keys have different values
		)	
)



describe('doesMatch', () => {
	it('should return true when target\'s keys are a subset of value\'s keys with same values', () => {
		fc.assert(fc.property(valueAndTarget, ([t, v]) => doesMatch(t, v)), {numRuns: 10_000})
	})
	it('should return false when target\'s keys are different from value\'s keys with or without same values', () => {
		fc.assert(fc.property(valueAndTargetWithDifferentKeys, ([t, v]) => !doesMatch(t,v)), {numRuns: 10_000})
	}).timeout(10_000)
	it('should return false when target\'s keys are identical from value\'s keys with different values', () => {
		fc.assert(fc.property(valueAndTargetSameKeysDifferentValues, ([t, v]) => !doesMatch(t,v)), {numRuns: 10_000})
	}).timeout(100_000)
})
/*
describe('fastcheck failing', () => {
	it('does Match', () => {
		fc.assert(
			fc.property(target, value, (t, v) => {
				const isFound = doesMatch(t, v)
				return isFound
			}))
	})
})

/*
describe('doesMatch ts', () => {
	it('should return a boolean true when target is in value', () => {
			const target = {name:"feul", cutenesslevel: 9999} 
			const value = {name:"feul", age: 2, cutenesslevel: 9999, height: 5} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.true
	})
	it('should return a boolean true when target is in value', () => {
			const target = {name:"feul"} 
			const value = {name:"feul", age: 2, cutenesslevel: 9999, height: 5} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.true
	})
	it('should return a boolean true when target is in value', () => {
			const target = {age: 2} 
			const value = {name:"feul", age: 2, cutenesslevel: 9999, height: 5} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.true
	})
	it('should return a boolean false when target is not in value', () => {
			const target = {name:"miette", cutenesslevel: 9999} 
			const value = {name:"feul", age: 2, cutenesslevel: 9999, height: 5} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.false
	})
	it('should return a boolean false when target is not in value', () => {
			const target = {anything: 210} 
			const value = {name:"feul", age: 2, cutenesslevel: 9999, height: 5} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.false
	})
	it('should return a boolean false when target is not in value', () => {
			const target = {} 
			const value = {name:"feul", age: 2, height: 5} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.false
	})
	it('should return a boolean false when target is not in value', () => {
			const target = {name:"feul", age: 2, cutenesslevel:9999, height: 5} 
			const value = {name:"feul", age: 2} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.false
	})
	it('should return a boolean false when target is not in value', () => {
			const target = {name:"feul", age: 2, cutenesslevel:9999, height: 5} 
			const value = {} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.false
	})
	it('should return a boolean false when target is not in value', () => {
			const target = {} 
			const value = {} 
			
			const isFound = doesMatch(target, value)

			return expect(isFound).to.be.false
	})
})
*/
