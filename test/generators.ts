import { object, nat, tuple, constant, array, anything, boolean, oneof, dictionary, string, integer, Arbitrary, constantFrom } from 'fast-check'
import { deepEquals } from '../src/deep-equals'
import { entries } from '../src/entries';
import { includes } from '../src/includes';
import { values } from '../src/values';

const shuffle = <T>(array: Array<T>): ReadonlyArray<T> => {
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

/**
 * Can't handle a function as parameter arbitrary
*/
const generateFunction = <T>(arb: Arbitrary<T>, options?:{numberOfParameters?: number}) => tuple(
  options?.numberOfParameters ? constantFrom(options.numberOfParameters) : integer(), 
  arb
).map(([paramCount, ret]) => {
  const paramNames = Array.from(Array(paramCount).keys()).map((paramName) => `param${paramName.toString()}`)
  const body = `{ return ${JSON.stringify(ret)} }`
  return new Function(...paramNames, body)
})

export const valueAndTarget = object().chain(vTest => 
  tuple(nat(Object.keys(vTest).length).map(rand =>
    shuffle(entries(vTest) as Array<[string, unknown]>)
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
    Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(element => includes(Object.keys(b), element)) && values(a).every(element => includes(values(b), element) && Object.keys(b).every(element => includes(Object.keys(a), element))) && values(b).every(element => includes(values(a), element))
)

export const twoObjectsInequalsInContent = tuple(object(), object()).filter(([a, b]) =>
    Object.keys(a).length !== Object.keys(b).length
)

export const valueAndTargetSameKeysDifferentValues = tuple(object(), object()).filter(([potentialValue, potentialTarget]) =>
    Object.keys(potentialValue).length > 0 && Object.keys(potentialTarget).every(element =>
      includes(Object.keys(potentialValue), element) && !ifObjectDeepEqual(potentialValue[element], potentialTarget[element])// Do they have the same keys and these keys have different values
    )	
)

export const ifObjectDeepEqual = (a: unknown, b: unknown): boolean => {
  if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null)
    return deepEquals(a as Record<string, unknown>, b as Record<string, unknown>)
  else
    return a === b
}

export const arrayAndNotElement = tuple(array(anything()), anything()).filter(([anArray, notInArray]) => anArray.findIndex(element => element === notInArray) === -1)
