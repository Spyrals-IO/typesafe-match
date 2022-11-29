import { Constructor, Match, Product } from './src'
import { matchCase, defaultCase, oneOf } from "./src/case";
import { number, string } from "./src/descriptors";

interface Dog extends Product<"Dog"> {
  name: string
  age: number
}

interface Cat extends Product<"Cat"> {
  name: string
  age: number | string
  cutenessLevel?: number
  height?: number
}

interface Horse extends Product<"Horse"> {
  title: string,
  deathDate: string
}

type Animal = Cat | Dog | Horse

const matchAnimal = Match<Animal>()

const Cat = Constructor<Cat>()
const Dog = Constructor<Dog>()
const Horse = Constructor<Horse>()

const animals: ReadonlyArray<Animal> = [Cat("Feul", 56, 9999), Dog("Tramp", 67), Dog("Dodger", 23), Horse("Twilight", "12/12/21"), Cat("Schnee", 47, 9998)]

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
  Cat: oneOf(
    matchCase({ name: 'feul' })((_: Cat) => true),
    matchCase({ name: 'schnee', age: number() })((_: Cat) => true),
    matchCase({ age: string() })((_: Cat) => true),
    matchCase({ name: string() })((_: Cat) => true)
  ),
  Dog: () => false,
  Horse: () => false
}))

console.log("trueCats", trueCats)

const oldOrNot = matchAnimal(animals[2])({
  Cat: oneOf(
    matchCase({name: 'feul', cutenessLevel: 9999})((cat: Cat) => cat.age as number - 1),
    defaultCase((cat: Cat) => cat.age)
  ),
  Dog: (dog: Dog) => dog.age,
  Horse: () => 9999
})

console.log("oldOrNot", oldOrNot)