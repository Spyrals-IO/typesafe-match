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
  never

type __Match2<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string}
> = <Return>(
  matcher:
  UnamedMatch<T, Return> |

  UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
  UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |

  NamedMatch<Sub1, Return> &
  NamedMatch<Sub2, Return>
) => (t: T) => Return

type __Match3<
  T extends {__type: string},
  Sub1 extends {__type: string},
  Sub2 extends {__type: string},
  Sub3 extends {__type: string}
> = <Return>(
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |

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
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |

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
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |

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
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    
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
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    
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
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |

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
  matcher:
    UnamedMatch<T, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub9, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

    
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

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
  matcher:
    UnamedMatch<T, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |
    UnamedMatch<T, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> & NamedMatch<Sub10, Return> |

    UnamedMatch<T, Return> & NamedMatch<Sub1, Return> & NamedMatch<Sub2, Return> & NamedMatch<Sub3, Return> & NamedMatch<Sub4, Return> & NamedMatch<Sub5, Return> & NamedMatch<Sub6, Return> & NamedMatch<Sub7, Return> & NamedMatch<Sub8, Return> & NamedMatch<Sub9, Return> |

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

type UnamedMatch<Param, Return> = 
  { [key in "_"]: (match: Param) => Return }

type NamedMatch<Param extends {__type: string}, Return> =
  { [key in Param["__type"]]: (match: Param) => Return }
