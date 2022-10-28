import 'mocha'
import fc from 'fast-check'
import { objectAndArrayEntries } from './generators';
import { entries } from '../src/entries';

describe('entries', () => {
  it('should return true when the entires given correspond to the entries of the object', () => {
    fc.assert(fc.property(objectAndArrayEntries, ([anObject, arrayEntries]) => {fc.pre(!arrayEntries.some(Number.isNaN)); return entries(anObject) as never === arrayEntries}))
  })
})
