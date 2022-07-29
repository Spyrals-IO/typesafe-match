import * as chai from 'chai'
import 'mocha'
chai.should()
import fc from 'fast-check'
import { values } from '../src/values';
import { objectAndArrayValues } from './generators';

describe('values', () => {
  it('should return true when the values given correspond to the values of the object', () => {
    fc.assert(fc.property(objectAndArrayValues, ([anObject, arrayValues]) => {fc.pre(!arrayValues.some(Number.isNaN)); values(anObject) === arrayValues}))
  })
})
