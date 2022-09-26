import { and, or } from './function'

class Descriptor<T> {
  constructor(public validate: (value: unknown) => value is T) {}
  and<T1>(other: Descriptor<T1>): Descriptor<T & T1> {
    return new Descriptor(and(this.validate, other.validate))
  }
  or<T1>(other: Descriptor<T1>): Descriptor<T | T1> {
    return new Descriptor(or(this.validate, other.validate))
  }
  orUndefined(): Descriptor<T | undefined> {
    return new Descriptor(or(this.validate, ((value: unknown) => value === undefined) as never))
  }
}

type NotUndefined = string | number | object | symbol | bigint | boolean | ReadonlyArray<unknown> | Record<string, unknown>

export const number = (): Descriptor<number> => new Descriptor(
  (value): value is number => typeof value === "number"
)

export const string = (): Descriptor<string> => new Descriptor(
  (value): value is string => typeof value === "string"
)

export const object = (): Descriptor<object> => new Descriptor(
  (value): value is object => typeof value === "object"
)

export const nullable = (): Descriptor<null> => new Descriptor(
  (value): value is null => value === null
)

export const defined = (): Descriptor<NotUndefined> => new Descriptor(
  (value): value is NotUndefined => value !== undefined
)

export const notDefined = (): Descriptor<undefined> => new Descriptor(
  (value): value is undefined => value === undefined
)

export const record = (innerDescriptors: Record<string, Descriptor<unknown>>): Descriptor<Record<string, unknown>> => new Descriptor(
  (value): value is Record<string, unknown> => 
    typeof value === "object" && 
    value !== null && 
    Object.keys(innerDescriptors).every(key => innerDescriptors[key].validate((value as Record<string, unknown>)[key]))  
)
