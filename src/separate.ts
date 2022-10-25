import { isMatcher } from './isMatcher'

export const separate = (matcherOrMatchOn: any, matchOnOrMatcher: any): [Matcher, T] => {
  if(isMatcher(matcherOrMatchOn)) {
      return [matcherOrMatchOn, matchOnOrMatcher]
  } else {
      return [matchOnOrMatcher, matcherOrMatchOn]
  }
}
