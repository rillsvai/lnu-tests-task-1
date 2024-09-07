import { MUST_BE_NON_EMPTY_ARRAY_ERROR_MESSAGE } from "./list.constants";
import { findBiggestNumber } from "./list.service";

describe("findBiggestNumber", () => {
  it("should return the biggest number in a list of positive numbers", () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = findBiggestNumber(numbers);
    expect(result).toBe(9);
  });

  it("should return the biggest number in a list containing negative numbers", () => {
    const numbers = [-10, -20, -3, -4];
    const result = findBiggestNumber(numbers);
    expect(result).toBe(-3);
  });

  it("should return the only number when the list contains a single element", () => {
    const numbers = [42];
    const result = findBiggestNumber(numbers);
    expect(result).toBe(42);
  });

  it("should return the biggest number in a mixed list of positive and negative numbers", () => {
    const numbers = [-1, 3, -5, 7, 2];
    const result = findBiggestNumber(numbers);
    expect(result).toBe(7);
  });

  it("should throw an error if the input is not an array", () => {
    const invalidInput = "notAnArray";
    expect(() => findBiggestNumber(invalidInput)).toThrow(
      MUST_BE_NON_EMPTY_ARRAY_ERROR_MESSAGE
    );
  });

  it("should throw an error if the input array is empty", () => {
    const emptyArray = [];
    expect(() => findBiggestNumber(emptyArray)).toThrow(
      MUST_BE_NON_EMPTY_ARRAY_ERROR_MESSAGE
    );
  });
});
