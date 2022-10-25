import { values } from './values'

const isMatchCaseOrDefaultCase = (currentValue: any): currentValue is any => {
  return typeof currentValue === "function" && currentValue.length <= 1
}

const isCase = (currentValue: any): currentValue is any =>  {
  if(currentValue.length === 2){
    currentValue.every(isMatchCaseOrDefaultCase)
  }
  return false
}

const isCaseOrFunction = (currentValue: any) => {
  if(typeof currentValue === "function" && currentValue.length <= 1)
    return true
  
  if(Array.isArray(currentValue)){
    return currentValue.every(isCase)
  }

  return false
}

export const isMatcher = (matcherOrMatchOn: any): matcherOrMatchOn is any => {
  return values(matcherOrMatchOn).every(isCaseOrFunction)
}
