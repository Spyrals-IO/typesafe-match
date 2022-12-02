import { areEquals } from "./deep-equals"
import { entries } from "./entries"
import { includes } from "./includes"
import { Descriptor } from "./descriptors"

export const doesMatch = (target: Record<string, Descriptor<unknown> | unknown>, value: object): boolean => {
  const targetEntries = entries(target as Record<string, unknown>)
  if (targetEntries.length === 0)
    return true

  //Resolve cases like doesMatch({"":undefined}, {})
  if (
    targetEntries
      .map(([targetKey]) => targetKey)
      .filter(targetKey => includes(Object.keys(value), targetKey))
      .length === 0
  )
    return false

  const didMatch = targetEntries.every(([key, descriptorOrValue]) => 
    descriptorOrValue instanceof Descriptor 
    ? descriptorOrValue.validate((value as Record<string, unknown>)[key])
    : areEquals(descriptorOrValue, (value as Record<string, unknown>)[key])
  )
  return didMatch
}
