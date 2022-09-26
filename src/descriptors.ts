import { and, or } from './function'

class Descriptor<T> {
  constructor(public validate: (value: unknown) => value is T) {}
  and<T1>(other: Descriptor<T1>): Descriptor<T & T1> {
    return new Descriptor(and(this.validate, other.validate))
  }
  or<T1>(other: Descriptor<T1>): Descriptor<T | T1> {
    return new Descriptor(or(this.validate, other.validate))
  }
  strict(): Descriptor<T> {
    return new Descriptor(and(this.validate, ((value: unknown) => value !== undefined) as never))
  }
}

const number = (): Descriptor<number | undefined> => new Descriptor(
  (value): value is number | undefined => typeof value === "number" || value === undefined
)