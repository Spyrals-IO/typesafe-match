import { deepEquals } from "./deep-equals"
import { entries } from "./entries"
import { includes } from "./includes"
import { Descriptor } from "./descriptors"

const selectByKeys = (keys: ReadonlyArray<string>, obj: Record<string, unknown>): Record<string, unknown> =>
  entries(obj).reduce((acc, [k, v]) => includes(keys, k) ? { ...acc, [k]: v} : acc, {})

export const doesMatch = (target: Record<string, Descriptor<unknown>> | object, value: object): boolean => {
  // For each key of target that have a descriptor
  // Check in value's same key if the descriptor hold (validate)
  // After all descriptors have hold, get the sub-target that does not contains
  // descriptors and then apply your bellow algorithm.

  // Replace target by targetWithoutDescriptor :)
  const targetEntries = entries(target as Record<string, unknown>)

  if (targetEntries.length === 0)
    return true

  const valueKeys = Object.keys(value)
  const onlyCommonKeys = targetEntries.map(([targetKey]) => targetKey).filter(targetKey => includes(valueKeys, targetKey))

  if (onlyCommonKeys.length === 0)
    return false
  
  const subTarget = selectByKeys(onlyCommonKeys, value as Record<string, unknown>)
  const subValue = selectByKeys(onlyCommonKeys, target as Record<string, unknown>)
  
  return deepEquals(subTarget, subValue)
}
