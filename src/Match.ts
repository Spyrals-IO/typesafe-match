import type { Union, List } from 'ts-toolbelt'

export type Match<T extends {__type: string}> =
  List.Length<Union.ListOf<T>> extends 2 ? __Match2<T, Union.ListOf<T>[0], Union.ListOf<T>[1]> :
  List.Length<Union.ListOf<T>> extends 3 ? __Match3<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2]> :
  List.Length<Union.ListOf<T>> extends 4 ? __Match4<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3]> :
  List.Length<Union.ListOf<T>> extends 5 ? __Match5<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4]> :
  List.Length<Union.ListOf<T>> extends 6 ? __Match6<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5]> :
  List.Length<Union.ListOf<T>> extends 7 ? __Match7<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6]> :
  List.Length<Union.ListOf<T>> extends 8 ? __Match8<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7]> :
  List.Length<Union.ListOf<T>> extends 9 ? __Match9<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8]> :
  List.Length<Union.ListOf<T>> extends 10 ? __Match10<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9]>:
  List.Length<Union.ListOf<T>> extends 11 ? __Match11<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10]>:
  List.Length<Union.ListOf<T>> extends 12 ? __Match12<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11]>:
  List.Length<Union.ListOf<T>> extends 13 ? __Match13<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12]>:
  List.Length<Union.ListOf<T>> extends 14 ? __Match14<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13]>:
  List.Length<Union.ListOf<T>> extends 15 ? __Match15<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14]>:
  List.Length<Union.ListOf<T>> extends 16 ? __Match16<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15]>:
  List.Length<Union.ListOf<T>> extends 17 ? __Match17<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15], Union.ListOf<T>[16]>:
  List.Length<Union.ListOf<T>> extends 18 ? __Match18<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15], Union.ListOf<T>[16], Union.ListOf<T>[17]>:
  List.Length<Union.ListOf<T>> extends 19 ? __Match19<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15], Union.ListOf<T>[16], Union.ListOf<T>[17], Union.ListOf<T>[18]>:
  List.Length<Union.ListOf<T>> extends 20 ? __Match20<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15], Union.ListOf<T>[16], Union.ListOf<T>[17], Union.ListOf<T>[18], Union.ListOf<T>[19]>:
  List.Length<Union.ListOf<T>> extends 21 ? __Match21<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15], Union.ListOf<T>[16], Union.ListOf<T>[17], Union.ListOf<T>[18], Union.ListOf<T>[19], Union.ListOf<T>[20]>:
  List.Length<Union.ListOf<T>> extends 22 ? __Match22<T, Union.ListOf<T>[0], Union.ListOf<T>[1], Union.ListOf<T>[2], Union.ListOf<T>[3], Union.ListOf<T>[4], Union.ListOf<T>[5], Union.ListOf<T>[6], Union.ListOf<T>[7], Union.ListOf<T>[8], Union.ListOf<T>[9], Union.ListOf<T>[10], Union.ListOf<T>[11], Union.ListOf<T>[12], Union.ListOf<T>[13], Union.ListOf<T>[14], Union.ListOf<T>[15], Union.ListOf<T>[16], Union.ListOf<T>[17], Union.ListOf<T>[18], Union.ListOf<T>[19], Union.ListOf<T>[20], Union.ListOf<T>[21]>:
  never

type __Match2<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string}
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
  NamedMatch<Sub1, Return> &
  NamedMatch<Sub2, Return>
) => (t: T) => Return

type __Match3<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string}
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> &
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return>
) => (t: T) => Return

type __Match4<
 T extends {__type: string},
 Sub1 extends {__type: string},
 Sub2 extends {__type: string},
 Sub3 extends {__type: string},
 Sub4 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> &
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return>
) => (t: T) => Return


type __Match5<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> &
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return>
) => (t: T) => Return

type __Match6<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> &
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return>
) => (t: T) => Return

type __Match7<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> &
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return>
) => (t: T) => Return


type __Match8<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return>
) => (t: T) => Return

type __Match9<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return>
) => (t: T) => Return

type __Match10<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return>
) => (t: T) => Return

type __Match11<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return>
) => (t: T) => Return

type __Match12<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return>
) => (t: T) => Return

type __Match13<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return>
) => (t: T) => Return

type __Match14<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return>
) => (t: T) => Return

type __Match15<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return>
) => (t: T) => Return

type __Match16<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return>
) => (t: T) => Return

type __Match17<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
  Sub17 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return> &
    NamedMatch<Sub17, Return>
) => (t: T) => Return

type __Match18<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
  Sub17 extends {__type: string},
  Sub18 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return> &
    NamedMatch<Sub17, Return> &
    NamedMatch<Sub18, Return>
) => (t: T) => Return

type __Match19<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
  Sub17 extends {__type: string},
  Sub18 extends {__type: string},
  Sub19 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return> &
    NamedMatch<Sub17, Return> &
    NamedMatch<Sub18, Return> &
    NamedMatch<Sub19, Return>
) => (t: T) => Return

type __Match20<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
  Sub17 extends {__type: string},
  Sub18 extends {__type: string},
  Sub19 extends {__type: string},
  Sub20 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return> &
    NamedMatch<Sub17, Return> &
    NamedMatch<Sub18, Return> &
    NamedMatch<Sub19, Return> &
    NamedMatch<Sub20, Return>
) => (t: T) => Return

type __Match21<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
  Sub17 extends {__type: string},
  Sub18 extends {__type: string},
  Sub19 extends {__type: string},
  Sub20 extends {__type: string},
  Sub21 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return> &
    NamedMatch<Sub17, Return> &
    NamedMatch<Sub18, Return> &
    NamedMatch<Sub19, Return> &
    NamedMatch<Sub20, Return> &
    NamedMatch<Sub21, Return>
) => (t: T) => Return

type __Match22<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string},
  Sub4 extends {__type: string},
  Sub5 extends {__type: string},
  Sub6 extends {__type: string},
  Sub7 extends {__type: string},
  Sub8 extends {__type: string},
  Sub9 extends {__type: string},
  Sub10 extends {__type: string},
  Sub11 extends {__type: string},
  Sub12 extends {__type: string},
  Sub13 extends {__type: string},
  Sub14 extends {__type: string},
  Sub15 extends {__type: string},
  Sub16 extends {__type: string},
  Sub17 extends {__type: string},
  Sub18 extends {__type: string},
  Sub19 extends {__type: string},
  Sub20 extends {__type: string},
  Sub21 extends {__type: string},
  Sub22 extends {__type: string},
> = <Return>(
  matcher: UnnamedMatch<T, Return> | MatchesWithUnderscore<T, Return> |
    NamedMatch<Sub1, Return> & 
    NamedMatch<Sub2, Return> &
    NamedMatch<Sub3, Return> &
    NamedMatch<Sub4, Return> &
    NamedMatch<Sub5, Return> &
    NamedMatch<Sub6, Return> &
    NamedMatch<Sub7, Return> &
    NamedMatch<Sub8, Return> &
    NamedMatch<Sub9, Return> &
    NamedMatch<Sub10, Return> &
    NamedMatch<Sub11, Return> &
    NamedMatch<Sub12, Return> &
    NamedMatch<Sub13, Return> &
    NamedMatch<Sub14, Return> &
    NamedMatch<Sub15, Return> &
    NamedMatch<Sub16, Return> &
    NamedMatch<Sub17, Return> &
    NamedMatch<Sub18, Return> &
    NamedMatch<Sub19, Return> &
    NamedMatch<Sub20, Return> &
    NamedMatch<Sub21, Return> &
    NamedMatch<Sub22, Return>
) => (t: T) => Return

type MatchesWithUnderscore<All extends {__type: string}, Return> = UnnamedMatch<All, Return> & NamedMatch<All, Return>

type UnnamedMatch<Param, Return> = 
  { _: (match: Param) => Return }

type NamedMatch<Param extends {__type: string}, Return> =
  { [key in Param["__type"]]: (match: Param) => Return }
