import { deepEquals, areEquals } from "./deep-equals"
import { entries } from "./entries"
import { includes } from "./includes"
import { Descriptor } from "./descriptors"

export const doesMatch = (target: Record<string, Descriptor<unknown>> | object, value: object): boolean => {
  
  const targetEntries = entries(target as Record<string, unknown>)
  if (targetEntries.length === 0)
    return true

  if (targetEntries.map(([targetKey]) => targetKey).filter(targetKey => includes(Object.keys(value), targetKey)).length === 0) //Resolve cases like doesMatch({"":undefined}, {})
    return false

  const didMatch = targetEntries.every(([key, descriptorOrValue]) => 
    descriptorOrValue instanceof Descriptor 
    ? descriptorOrValue.validate((value as Record<string, unknown>)[key])
    : areEquals(descriptorOrValue, (value as Record<string, unknown>)[key])
  )
  return didMatch
}
