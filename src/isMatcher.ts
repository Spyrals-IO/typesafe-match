import { values } from './values'

import type { Case, DefaultCase, Handler, Validator } from './case'

export const isValidator = (currentValue: any): currentValue is Validator<unknown> =>
  typeof currentValue === "function" && typeof currentValue() === "boolean" && currentValue.length === 1


export const isHandler = (currentValue: any): currentValue is Handler<unknown, unknown> => 
  typeof currentValue === "function" && currentValue.length <= 1


export const isCase = (currentValue: any): currentValue is Case<unknown, unknown> | DefaultCase<unknown, unknown> =>  
  Array.isArray(currentValue) && currentValue.length === 2 ? isValidator(currentValue[0]) && isHandler(currentValue[1]) : false


export const isCasesOrHandler = (currentValue: any): currentValue is ReadonlyArray<Case<unknown, unknown> | DefaultCase<unknown, unknown>> | Handler<unknown, unknown> => 
  Array.isArray(currentValue) ? currentValue.every(isCase) : typeof currentValue === "function" && currentValue.length <= 1


export const isMatcher = (matcherOrMatchOn: any): matcherOrMatchOn is any =>
  values(matcherOrMatchOn).every(isCasesOrHandler)
