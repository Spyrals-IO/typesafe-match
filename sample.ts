import { assert } from 'chai'
import { Constructor, Match, Product } from './src'

interface Dog extends Product<"Dog"> {
  name: string
  age: number
}

interface Cat extends Product<"Cat"> {
  name: string
  age: number
  cutenessLevel?: number
  height?: number
}

interface Horse extends Product<"Horse"> {
  title: string,
  deathDate: string
}

type Animal = Cat | Dog | Horse

const matchAnimal = Match<Animal>()

const Cat = Constructor<Cat>()//TODO no macro, prend un paramètre pour la valeur en dur et contruit la fonction ainsi
const Dog = Constructor<Dog>()
const Horse = Constructor<Horse>()

const animals: ReadonlyArray<Animal> = [Cat("Feul", 56), Dog("Tramp", 67), Dog("Dodger", 23), Horse("Twilight", "12/12/21")]

const dogs = animals.filter(matchAnimal({
  Dog: () => true,
  Cat: () => false,
  Horse: () => false
}))
const cats = animals.filter(matchAnimal({
  Cat: () => true,
  _: () => false
}))
const horses = animals
.map(matchAnimal({
  Horse: (horse: Horse) => horse.title,
  _: () => "Nobody"
}))

const oneAnimal = animals[0]
const nameOrTitle = matchAnimal({
  Horse: (horse: Horse) => horse.title,
  Cat: (cat: Cat) => cat.name,
  Dog: (dog: Dog) => dog.name
})(oneAnimal)

console.log("Good boys : ", dogs)
console.log("My only friends : ", cats)
console.log("Pedant pedestrians : ", horses)

console.log("choosen one : ", nameOrTitle)

export const deepEquals = (obj1: object, obj2: object): boolean => {
  if (Object.is(obj1, obj2))
    return true
  
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length)
    return false

  if (!(keys1.every(key1 => keys2.find(key2 => key1 === key2) && keys2.every(key2 => keys1.find(key1 => key2 === key1)))))
    return false
  
  const entries1 = Object.entries(obj1)
  const entries2 = Object.entries(obj2)

  entries1.sort((a, b) => a[0].localeCompare(b[0]))
  entries2.sort((a, b) => a[0].localeCompare(b[0]))

  
  for (let i = 0; i < keys1.length; i++) {
    if (typeof entries1[i][1] !== typeof entries2[i][1])
      return false

    if(Number.isNaN(entries1[i][1]) || Number.isNaN(entries2[i][1]))
      return false

    if(entries1[i][1] === null && entries2[i][1] === null)
      return true
   
    if(entries1[i][1] === null && entries2[i][1] !== null)
      return false

    if(entries1[i][1] !== null && entries2[i][1] === null)
      return false
      
    switch (typeof entries1[i][1]) {
      case 'object':
        if (!deepEquals(entries1[i][1], entries2[i][1]))
          return false
        break;
      
      default:
        if(entries1[i][1] !== entries2[i][1])
          return false
        break;
    }
    
  }

  return true
}

export const doesMatch = (target: object, value: object): boolean => {

  const valueKeys = Object.keys(value)
  const commonKeys = Object.keys(target).filter(value => valueKeys.includes(value))
  const targetKV = Object.entries(target)
  const valueKV = Object.entries(value)

  if (targetKV.length === 0)
    return true
  else if (commonKeys.length === 0)
    return false
  else {
    const checkTarget: [string, unknown][]= commonKeys.map(commonKey => {
      return valueKV.find(element => element[0] === commonKey) as [string, unknown] //commonKeys contains all the common keys so each array must contain the key we are looking for
    })

    const checkValue: [string, unknown][] = commonKeys.map(commonKey => {
      return targetKV.find(element => element[0] === commonKey) as [string, unknown]
    })

    checkTarget.sort((a, b) => a[0].localeCompare(b[0]))
    checkValue.sort((a, b) => a[0].localeCompare(b[0]))

    return deepEquals(checkTarget, checkValue)

  }
}

const matchCase = <Target>(target: Target) => <T extends Partial<Target>, Return>(handler: (value: T) => Return) => (value: T): Return | null =>
  doesMatch(target as unknown as object, value) ? handler(value) : null

const defaultCase = <T, Return>(handler: (value: T) => Return) => (value: T): Return | null =>
  handler(value)

/*
const trueCats = animals.filter(matchAnimal({
  Cat: [
    // matchCase({name: 'feul', complex: {truc: { vachementComplex: { name: 'merlin' } } }, cutenessLevel: 9999})((cat: Cat) => true),
    // matchCase({name: 'rere', age : 5})((cat: Cat) => true),
    // matchCase({age : 5})((cat: Cat) => true),
    // matchCase({name: 'rere'})((cat: Cat) => true),
    // matchCase({})((cat: Cat) => true),
    matchCase({name: 'feul', cutenessLevel: 9999})((cat: Cat) => true),
    defaultCase((cat: Cat) => false)
  ],
  Dog: () => false,
  Horse: () => false
}))
*/