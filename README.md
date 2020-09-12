# ts-match

Exhaustive `match` on algrebraic data types.

```
npm i ts-match
```

## Usage
`ts-match` is intended for use with Typescript.

Let's start with a simple toy model :
```ts
interface Dog {
  name: string
  age: number
}

interface Cat {
  name: string
  age: number
}

type Animal = Cat | Dog
```

`Animal` is our ADT while `Dog` and `Cat` are it's components.

Before going any further, each interface should extends `Product` and pass it it's name :
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

One can then build the matcher for this adt :
```ts
import { Match } from 'ts-match'

...

const matchAnimal = Match<Animal>()
```

`matchAnimal` can then be used as simple function anywhere.
It will check for exhaustiveness at compile time.
```ts
const dodger: Animal = Dog("Dodger", 23)

const nameOrNot = matchAnimal({ //Compile
  Dog: (dog: Dog) => dog.name,
  Cat: (cat: Cat) => "I am not a cat"
})(dodger)

const nameOrNot = matchAnimal({ //Does not compile, missing cases
  Dog: (dog: Dog) => dog.name
})(dodger)
```

If you want to handle all remaining cases, a special key is defined for that:
```ts
const dodger: Animal = Dog("Dodger", 23)

const nameOrNot = matchAnimal({
  Dog: (dog: Dog) => dog.name,
  _: () => "still not a cat" //Will match all non-dog cases, only cat for this example
})(dodger)
```

Finally, the `matchAnimal` function is curryfied to be of simple use in reactive chains:
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

## Installation
To use `ts-match` you need to compile against its macro.

You can do that by defining `devDependencies` and changing the compilation step you use. A simple example
can be found in the `package.json` of this repositories. All `optionalDependencies` of this package should be fullfiled (as `devDependencies` not runtime ones) and a special element should be added to your `install` script.

## Design Limitation
To obtains compile time exhaustivity checks some design decisions have been made.
The most visible part is that you need to pass the name of your interfaces as string to `Product`.
It will stay necessary as long as `Typescript` does not provide type-level operations returning the name of a given type.

The choice of the `_` character as _remaining cases_ is a personal preference but should appear clear to most people.
To avoid clashes in the exhaustivity checks you should never name one of your interface `_`.
I do believe it's not a problem for most.