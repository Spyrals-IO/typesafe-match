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

const animals: ReadonlyArray<Animal> = [Cat("feul", 56), Dog("zqdq", 67), Dog("qddd", 23), Horse("qdq", "12/12/12")]

const dogs = animals.filter(matchAnimal({
  Dog: () => true,
  _: () => false
}))

const animalNames = animals
.filter(matchAnimal({
  Horse: () => false,
  _: () => true
}))
.map(catOrDog => catOrDog as Cat | Dog)
.map(catOrDog => catOrDog.name)
