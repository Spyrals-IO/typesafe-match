import { entries } from "./entries";
import { zip } from "./zip";

const sortByKeyAlphabetically = (a: [string, unknown], b: [string, unknown]) =>
  a[0].localeCompare(b[0]);

const takeValue = (x: [string, unknown]): unknown => x[1];

export const areEquals = (value1: unknown, value2: unknown): boolean => {
  if (typeof value1 !== typeof value2) return false;

  if (Number.isNaN(value1) || Number.isNaN(value2)) return false;

  if (value1 === null && value2 === null) return true;

  if (value1 === null && value2 !== null) return false;

  if (value1 !== null && value2 === null) return false;

  switch (typeof value1) {
    case "object":
      return deepEquals(value1 as Record<string, unknown>, value2 as Record<string, unknown>)
      //if (!deepEquals(value1 as Record<string, unknown>, value2 as Record<string, unknown>)) return false;

    default:
      if (value1 !== value2) return false;
  }
  return true;
};

const reduceToEquality = (acc: boolean, [value1, value2]:[unknown, unknown]): boolean =>
  acc && (areEquals(value1, value2))

export const deepEquals = (obj1: Record<string, unknown>, obj2: Record<string, unknown>): boolean => {
  if (Object.is(obj1, obj2)) return true;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  if (
    !keys1.every(
      (key1) =>
        keys2.find((key2) => key1 === key2) &&
        keys2.every((key2) => keys1.find((key1) => key2 === key1))
    )
  )
    return false;

  const entries1 = entries(obj1) as Array<[string, unknown]>;
  const entries2 = entries(obj2) as Array<[string, unknown]>;

  entries1.sort(sortByKeyAlphabetically);
  entries2.sort(sortByKeyAlphabetically);

  const values1 = entries1.map(takeValue);
  const values2 = entries2.map(takeValue);

  return zip(values1, values2).reduce(
    reduceToEquality,
    true
  );
};
