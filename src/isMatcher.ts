import { values } from './values'

const isValidator = (currentValue: any): currentValue is any => {
  return typeof currentValue() === "boolean" && currentValue.length === 1
}

const isHandler = (currentValue: any): currentValue is any => {
  return typeof currentValue === "function" && currentValue.length <= 1
}

const isCase = (currentValue: any): currentValue is any =>  {
  return Array.isArray(currentValue) && currentValue.length === 2 ? isValidator(currentValue[0]) && isHandler(currentValue[1]) : false
}

const isCaseOrFunction = (currentValue: any): boolean => {
  return Array.isArray(currentValue) ? currentValue.every(isCase) : typeof currentValue === "function" && currentValue.length <= 1
}

export const isMatcher = (matcherOrMatchOn: any): matcherOrMatchOn is any => {
  return values(matcherOrMatchOn).every(isCaseOrFunction)
}
