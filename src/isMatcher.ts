import { values } from './values'

export const isValidator = (currentValue: any): currentValue is any =>
  typeof currentValue() === "boolean" && currentValue.length === 1


export const isHandler = (currentValue: any): currentValue is any => 
  typeof currentValue === "function" && currentValue.length <= 1


export const isCase = (currentValue: any): currentValue is any =>  
  Array.isArray(currentValue) && currentValue.length === 2 ? isValidator(currentValue[0]) && isHandler(currentValue[1]) : false


export const isCaseOrFunction = (currentValue: any): boolean => 
  Array.isArray(currentValue) ? currentValue.every(isCase) : typeof currentValue === "function" && currentValue.length <= 1


export const isMatcher = (matcherOrMatchOn: any): matcherOrMatchOn is any =>
  values(matcherOrMatchOn).every(isCaseOrFunction)
