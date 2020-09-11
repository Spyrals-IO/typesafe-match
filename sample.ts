import { Constructor, Match } from './src'

interface Dog {
  name: string
  age: number
  __type: "Dog"
}

interface Cat {
  name: string
  age: number
  __type: "Cat"
}

interface Horse {
  title: string,
  deathDate: string,
  __type: "Horse"
}

type Animal = Cat | Dog | Horse

const matchAnimal = Match<Animal>()

const Cat = Constructor<Cat>()
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

const animalNames = animals
.filter(matchAnimal({
  Horse: (horse: Horse) => false,
  _: () => true
}))
.map(catOrDog => catOrDog as Cat | Dog)
.map(catOrDog => catOrDog.name)

const horses = animals
.map(matchAnimal({
  Horse: (horse: Horse) => horse.title,
  _: () => "Nobody"
}))

console.log("Good boys : ", dogs)
console.log("My only friends : ", cats)
console.log("Pedant pedestrians : ", horses)