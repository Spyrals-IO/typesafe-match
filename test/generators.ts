import { object, nat, tuple, constant } from 'fast-check'
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


export const valueAndTarget = object().chain(vTest => 
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

export const valueAndTargetWithDifferentKeys = tuple(object(),object()).filter(([potentialValue, potentialTarget]) =>
  Object.keys(potentialValue).length > 0 && Object.keys({...potentialValue, ...potentialTarget}).length === Object.keys(potentialValue).length + Object.keys(potentialTarget).length
)

export const twoObjectsEqualsInContent = tuple(object(), object()).filter(([a, b]) =>
		Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(element => Object.keys(b).includes(element)) && Object.values(a).every(element => Object.values(b).includes(element) && Object.keys(b).every(element => Object.keys(a).includes(element))) && Object.values(b).every(element => Object.values(a).includes(element))
)

export const twoObjectsInequalsInContent = tuple(object(), object()).filter(([a, b]) =>
		Object.keys(a).length !== Object.keys(b).length
)

export const valueAndTargetSameKeysDifferentValues = tuple(object(), object()).filter(([potentialValue, potentialTarget]) =>
		Object.keys(potentialValue).length > 0 && Object.keys(potentialTarget).every(element =>
			Object.keys(potentialValue).includes(element) && !ifObjectDeepEqual(potentialValue[element], potentialTarget[element])// Do they have the same keys and these keys have different values
		)	
)

export const ifObjectDeepEqual = (a: unknown, b: unknown): boolean => {
	if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null)
		return deepEquals(a, b)
	else
		return a === b
}