import { zip } from './zip'

export const deepEquals = (obj1: object, obj2: object): boolean => {
  if (Object.is(obj1, obj2))
    return true

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length)
    return false

  if (!(keys1.every(key1 => keys2.find(key2 => key1 === key2) && keys2.every(key2 => keys1.find(key1 => key2 === key1)))))
    return false

  const entries1 = Object.entries(obj1)
  const entries2 = Object.entries(obj2)

  entries1.sort((a, b) => a[0].localeCompare(b[0]))
  entries2.sort((a, b) => a[0].localeCompare(b[0]))

  const values1 = entries1.map(x => x[1])
  const values2 = entries2.map(x => x[1])

  return zip(values1, values2).reduce<boolean>((acc, [value1, value2]) => acc &&  (() => { 
    if (typeof value1 !== typeof value2)
      return false

    if(Number.isNaN(value1) || Number.isNaN(value2))
      return false

    if(value1 === null && value2 === null)
      return true
    
    if(value1 === null && value2 !== null)
      return false

    if(value1 !== null && value2 === null)
      return false
      
    switch (typeof value1) {
      case 'object':
        if (!deepEquals(value1, value2))
          return false
        break;
      
      default:
        if(value1 !== value2)
          return false
        break;
    }
    return true
  })(), true)
}
