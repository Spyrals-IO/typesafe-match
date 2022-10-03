import { deepEquals, areEquals } from "./deep-equals"
import { entries } from "./entries"
import { includes } from "./includes"
import { Descriptor } from "./descriptors"

const selectByKeys = (keys: ReadonlyArray<string>, obj: Record<string, unknown>): Record<string, unknown> =>
  entries(obj).reduce((acc, [k, v]) => includes(keys, k) ? { ...acc, [k]: v} : acc, {})

export const doesMatch = (target: Record<string, Descriptor<unknown>> | object, value: object): boolean => {
  
  const targetEntries = entries(target as Record<string, unknown>)
  if (targetEntries.length === 0)
    return true

  // const targetWithoutDescriptor: Array<[string, unknown]> = []
  if (targetEntries.map(([targetKey]) => targetKey).filter(targetKey => includes(Object.keys(value), targetKey)).length === 0) //Resolve cases like doesMatch({"":undefined}, {})
    return false

  const didMatch = targetEntries.every(([key, descriptorOrValue]) => 
    descriptorOrValue instanceof Descriptor 
    ? descriptorOrValue.validate((value as Record<string, unknown>)[key])
    : areEquals(descriptorOrValue, (value as Record<string, unknown>)[key])
  )
  return didMatch
  /*
  targetEntries.map((entry) => {
    if(entry[1] instanceof Descriptor) {
      if(!entry[1].validate((value as Record<string, unknown>)[entry[0]]))
        return false
    }
    else {
      targetWithoutDescriptor.push(entry)
    }
  })
  
  const valueKeys = Object.keys(value)
  const onlyCommonKeys = targetWithoutDescriptor.map(([targetKey]) => targetKey).filter(targetKey => includes(valueKeys, targetKey))

  if (onlyCommonKeys.length === 0)
    return false
  
  const subTarget = selectByKeys(onlyCommonKeys, value as Record<string, unknown>)
  const subValue = selectByKeys(onlyCommonKeys, target as Record<string, unknown>)
  
  return deepEquals(subTarget, subValue)*/
}
