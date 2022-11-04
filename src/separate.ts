export const separate = (matcherOrMatchOn: any, matchOnOrMatcher: any): [any, any] => {
  if(!("__type" in matcherOrMatchOn)) {
      return [matcherOrMatchOn, matchOnOrMatcher]
  } else {
      return [matchOnOrMatcher, matcherOrMatchOn]
  }
}
