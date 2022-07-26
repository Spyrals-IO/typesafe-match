import { Constructor, Match, Product } from './src'
import { matchCase, defaultCase } from "./src/case";

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
