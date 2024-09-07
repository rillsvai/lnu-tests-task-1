import { MUST_BE_NON_EMPTY_ARRAY_ERROR_MESSAGE } from "./list.constants";

export function findBiggestNumber(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error(MUST_BE_NON_EMPTY_ARRAY_ERROR_MESSAGE);
  }

  return Math.max(...numbers);
}
