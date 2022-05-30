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

//Fonction recursive parcours les deux objets
const deepEquals = (obj1: object, obj2: object): boolean => {return true}

//Si toutes les valeurs de target correspondent aux valeurs de value, recursivement, alors true, sinon false
export const doesMatch = (target: object, value: object): boolean => {
  
  const keysTarget = Object.keys(target)
  const keysValue = Object.keys(value)

  const commonKeys = Object.keys(target).filter(x => Object.keys(value).includes(x))
  const targetKV = Object.entries(target)
  const valueKV = Object.entries(value)

  //const checkTarget: [string, unknown][] = []
  //const checkValue: [string, unknown][] = []
  let isOk: boolean = false

  if (targetKV.length === 0)
    return true
  else {

    const checkTarget: [string, unknown][]= commonKeys.map(commonKey => {
      return Object.entries(value).find(element => element[0] === commonKey) as [string, unknown] //commonKeys contains all the common keys so each array must contain the key we are looking for
    })

    const checkValue: [string, unknown][] = commonKeys.map(commonKey => {
      return Object.entries(target).find(element => element[0] === commonKey) as [string, unknown]
    })
    checkTarget.sort((a, b) => a[0].localeCompare(b[0]))
    checkValue.sort((a, b) => a[0].localeCompare(b[0]))

    commonKeys.forEach(commonKey => {

      checkTarget.push(Object.entries(value).find(element => element[0] === commonKey) as [string, unknown]) //commonKeys contains all the common keys so each array must contain the key we are looking for
      checkValue.push(Object.entries(target).find(element => element[0] === commonKey) as [string, unknown])

      checkTarget.sort((a, b) => a[0].localeCompare(b[0]))
      checkValue.sort((a, b) => a[0].localeCompare(b[0]))


      /*for (const [key, value] of valueKV) {
          if (key === commonKey)
            checkTarget.push([key,value])
      }
      for (const [key, value] of targetKV) {
          if (key === commonKey) 
            checkValue.push([key,value])
      }*/
    })

    //  checkTarget = [["nom", "Paick"], ["prenom", "Paul"]]      checkValue = [["nom", "grtter"], ["prenom", "Paul"]]  renvoie faux
    //  checkTarget2 = ["nom", "Paick"]                           checkValue2 = ["nom", "Paick"]                       renvoie vrai
    isOk = deepEquals(checkTarget, checkValue)

    /*for (let index = 0; index < checkTarget.length; index++) {
      const [targetKey, targetValue] = checkTarget[index]
      const [valueKey, valueValue] = checkValue[index]
      if (targetKey === valueKey && targetValue === valueValue)
        isOk = true
      else if (Number.isNaN(targetValue) && Number.isNaN(valueValue))
        isOk = true
      else
        isOk = false
    }*/
  }

  return isOk

/*
  if (!(JSON.stringify(diffKeys) === JSON.stringify(keysValue))) {
    const targetKV = Object.entries(target)
    const valueKV = Object.entries(value)
    let isOK: boolean = true

    targetKV.forEach(duoTarget => {
      let verif = JSON.stringify(valueKV).indexOf(JSON.stringify(duoTarget));
      if ((verif === -1)) {isOK = false}
    })
    return isOK
  }
  else {
    return false
  }*/
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