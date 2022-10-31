import { isMatcher } from './isMatcher'

export const separate = (matcherOrMatchOn: any, matchOnOrMatcher: any): [any, any] => {
  if(isMatcher(matcherOrMatchOn)) {
      return [matcherOrMatchOn, matchOnOrMatcher]
  } else {
      return [matchOnOrMatcher, matcherOrMatchOn]
  }
}
