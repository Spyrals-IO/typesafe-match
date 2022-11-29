# ts-match

Exhaustive `match` on algebraic data types.

```
npm i typesafe-match
```

## Usage
`typesafe-match` is intended for use with Typescript.

Let's start with a simple toy model :
```ts
interface Dog {
  name: string
  age: number
}

interface Cat {
  name: string
  age: number
  cutenessLevel: number
}

type Animal = Cat | Dog
```

`Animal` is our ADT while `Dog` and `Cat` are its components.

Each interface should extends `Product` and pass it its name :
```ts
import type { Product } from 'ts-match' 

interface Dog extends Product<"Dog"> { ... }
interface Cat extends Product<"Cat"> { ... }

type Animal = Cat | Dog
```

Each type of the ADT should request a type aware `Constructor` by using the macro of the same name.

```ts
import { Constructor } from 'ts-match'

...

const Dog = Constructor<Dog>()
const dodger = Dog("Dodger", 23)
```

One can then build the matcher for this ADT :
```ts
import { Match } from 'ts-match'

...

const matchAnimal = Match<Animal>()
```

`matchAnimal` can be used as simple function anywhere.
It will check for exhaustiveness at compile time.
```ts
const dodger: Animal = Dog("Dodger", 23)

const nameOrNot = matchAnimal(dodger)({ //Compile
  Dog: (dog: Dog) => dog.name,
  Cat: (cat: Cat) => "I am not a cat"
})

const nameOrNot = matchAnimal(dodger)({ //Does not compile, missing cases
  Dog: (dog: Dog) => dog.name
})
```

If you want to handle all remaining cases, a special key is defined for that:
```ts
const dodger: Animal = Dog("Dodger", 23)

const nameOrNot = matchAnimal({
  Dog: (dog: Dog) => dog.name,
  _: () => "still not a cat" //Will match all non-dog cases, only cat for this example
})(dodger)
```

## Installation
To use `typesafe-match` you need to compile against its macro.

You can do that by defining `devDependencies` and changing the compilation step you use. A simple example
can be found in the `package.json` of this repositories. All `optionalDependencies` of this package should be fullfiled (as `devDependencies` not runtime ones) and a special element should be added to your `install` script.

## Chaining

Finally, the `matchAnimal` function is curried to be of simple use in reactive chains:
```ts
const animals = ???

animals.filter(matchAnimal({
  Dog: () => true,
  Cat: (cat: Cat) => cat.name != "miaous"
})).map(matchAnimal({
  Dog: () => "I'm a good boy"
  Cat: () => "I'm not miaous"
}))
```

but It can also be used normally :

```ts
const animal = ???

matchAnimal(animal)({
  Dog: () => true,
  Cat: (cat: Cat) => cat.name != "miaous"
}))
```

Or the two can be mixed together :

```ts
const animal = ???
const catFriends = ???
const dogFriends = ???

matchAnimal(animal)({
  Dog: () => catFriends,
  Cat: () => dogFriends
})).map(matchAnimal({
  Dog: (dog: Dog) => `I'm the cat's friend ${dog}`
  Cat: (cat: Cat) => `I'm some big and slow dog's friends ${cat}`
}))
```

To select our best friend friend's !

## Embracing Complexity

A matcher can also use sub-matchers and descriptors for more complexe cases.
It still remains typesafe as, if you provide an incomplete list of descriptors and sub-matchers, it will refuse to compile.

```ts

const animal = ???

const youngest = matchAnimal(animal)({
  Cat: oneOf(
    matchCase({name: 'feul', cutenessLevel: 9999})((_: Cat) => 0),
    defaultCase((cat: Cat) => cat.age)
  ),
  Dog: (dog: Dog) => dog.age,
})
```

Here the sub-matcher describe one particular cat and, as we prefer it, set its age to `0`, because it deserved to win.
We use the `matchCase` function to describe the object we want to match. If `animal` does have this two properties then `matchAnimal` will choose this line and use the `0` trick to have our cat win.

It's also possible to describe all our cases, without defining a default.

```ts

// For this example sake, dont do this at home
interface Cat {
  name: string
  age: number | number
}

const animal = ???

const youngest = matchAnimal(animal)({
  Cat: oneOf(
    matchCase({ name: 'feul' })((_: Cat) => 0),
    matchCase({ name: 'schnee', age: number() })((schnee: Cat) => (schnee.age as number) - 5),
    matchCase({ age: string() })((cat: Cat) => parseInt(cat.age)),
    matchCase({ name: string() })((cat: Cat) => cat.age as number)
  ),
  Dog: (dog: Dog) => dog.age,
})
```

In this little more involved example we have two awesome cats. `feul` is still our desired winner, so we set it's age to `0` again.
But if we have a cat named `schnee` and its `age` is a `number` then we want to give it a `5` years advantage.
If we dont have these two cats, but we do have a cat with an age being a `string` then we want to parse it, finally the last case only specifies that the cat need to be named, it's aged will be a number as we already handle all others cats above.

If we forgot to specify one of the cases, except the first that is too specific to matter, we get a compilation error.

```ts

interface Cat { ... }

const animal = ???

const youngest = matchAnimal(animal)({
  Cat: oneOf( // Wont compile, missing the case where the Cat has a number's age but is not schnee.
    matchCase({ name: 'feul' })((_: Cat) => 0),
    matchCase({ name: 'schnee', age: number() })((schnee: Cat) => (schnee.age as number) - 5),
    matchCase({ age: string() })((cat: Cat) => parseInt(cat.age))
  ),
  Dog: (dog: Dog) => dog.age,
})
```

## Design Limitation
To obtains compile time exhaustivity checks some design decisions have been made.
The most visible part is that you need to pass the name of your interfaces as string to `Product`.
It will stay necessary as long as `Typescript` does not provide type-level operations returning the name of a given type.

The choice of the `_` character as _remaining cases_ is a personal preference but should appear clear to most people.
To avoid clashes in the exhaustivity checks you should never name one of your interface `_`.
I do believe it's not a problem for most.