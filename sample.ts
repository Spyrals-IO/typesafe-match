import { Constructor } from './src'

interface User {
  name: string
  age: number
}

const User = Constructor<User>()

const merlin = User("merlin", 26)
console.log(merlin)