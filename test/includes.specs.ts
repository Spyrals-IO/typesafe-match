import * as chai from 'chai'
import 'mocha'
chai.should()
import fc from 'fast-check'
import { includes } from '../src/includes'
import { arrayAndNotElement } from './generators'

function generateRandom(maxLimit: number): number{
  let rand: number = Math.random() * maxLimit

  rand = Math.floor(rand)

  return rand
}

describe('includes', () => {
  it('should always includes one of its element when at least one element is present', () => {
    fc.assert(fc.property(fc.array(fc.anything(), {minLength: 1}), (anArray) => {fc.pre(!anArray.some(Number.isNaN));includes(anArray, anArray[generateRandom(anArray.length -1)])}))
  })
  it('should always not includes an element not in the array', () => {
    fc.assert(fc.property(arrayAndNotElement, ([anArray, notInArray]) => !includes(anArray,notInArray)))
  })
})