import 'mocha'
import fc from 'fast-check'
import { values } from '../src/values';
import { entries } from '../src/entries';
import { includes } from '../src/includes';

describe('values', () => {
  it('should return true when the values given correspond to the values of the object', () => {
    fc.assert(fc.property(fc.object(), (anObject) => {
      const shouldBeValues = values(anObject)
      const anObjectValues = entries(anObject).map(([, value]) => value)
      return  anObjectValues.every((element) => includes(shouldBeValues, element))
    }))
  })
})
