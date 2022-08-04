import { deepEquals } from "./deep-equals"
import { entries } from "./entries"
import { includes } from "./includes"

export const doesMatch = (target: object, value: object): boolean => {

  const valueKeys = Object.keys(value)
  const commonKeys = Object.keys(target).filter(value => includes(valueKeys, value))
  const targetKV = entries(target)
  const valueKV = entries(value)
  const checkCommonKeys = (entree: any[][]):[string, unknown][] => {
    return commonKeys.map(commonKey => 
      entree.find(element => element[0] === commonKey) as [string, unknown] //commonKeys contains all the common keys so each array must contain the key we are looking for
    )
  }

  if (targetKV.length === 0)
    return true
  if (commonKeys.length === 0)
    return false
  
  const checkTarget = checkCommonKeys(valueKV)
  const checkValue = checkCommonKeys(targetKV)

  checkTarget.sort((a, b) => a[0].localeCompare(b[0]))
  checkValue.sort((a, b) => a[0].localeCompare(b[0]))

  return deepEquals(checkTarget, checkValue)
}
