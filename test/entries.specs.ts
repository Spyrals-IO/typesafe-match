import 'mocha'
import fc from 'fast-check'
import { entries } from '../src/entries';

describe('entries', () => {
  it('should return true when the entries given correspond to the entries of the object', () => {
    fc.assert(fc.property(fc.object(), (anObject) => {
      const shouldBeEntries = entries(anObject)
      const anObjectKeys = Object.keys(anObject)
      const keysArePresent = anObjectKeys.every(key => !!shouldBeEntries.find(([k]) => k === key))

      const sameKeySameValue = shouldBeEntries.every(([key, value]) => anObject[key] === value)

      return keysArePresent && sameKeySameValue
    }))
  }).timeout(10_000)
})
