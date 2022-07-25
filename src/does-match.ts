import { deepEquals } from "./deep-equals"

export const doesMatch = (target: object, value: object): boolean => {

  const valueKeys = Object.keys(value)
  const commonKeys = Object.keys(target).filter(value => valueKeys.includes(value))
  const targetKV = Object.entries(target)
  const valueKV = Object.entries(value)

  if (targetKV.length === 0)
    return true
  else if (commonKeys.length === 0)
    return false
  else {
    const checkTarget: [string, unknown][]= commonKeys.map(commonKey => {
    return valueKV.find(element => element[0] === commonKey) as [string, unknown] //commonKeys contains all the common keys so each array must contain the key we are looking for
    })

    const checkValue: [string, unknown][] = commonKeys.map(commonKey => {
    return targetKV.find(element => element[0] === commonKey) as [string, unknown]
    })

    checkTarget.sort((a, b) => a[0].localeCompare(b[0]))
    checkValue.sort((a, b) => a[0].localeCompare(b[0]))

    return deepEquals(checkTarget, checkValue)
  }
}
