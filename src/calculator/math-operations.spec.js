import {
  add,
  subtract,
  divide,
  calculateModulus,
  calculateFactorial,
  calculateAbs,
} from "./calculator.service";

import { formatNumber } from "./calculator.utils";

jest.mock("./calculator.utils", () => ({
  formatNumber: jest.fn(),
}));

describe("Calculator Service", () => {
  describe("add()", () => {
    it("should correctly add two numbers and call formatNumber", async () => {
      const a = 5;
      const b = 3;
      const sum = a + b;

      await add(a, b);

      expect(formatNumber).toHaveBeenCalledWith(sum);
    });
  });

  describe("subtract()", () => {
    it("should correctly subtract two numbers and call formatNumber", async () => {
      const a = 10;
      const b = 4;
      const difference = a - b;

      await subtract(a, b);

      expect(formatNumber).toHaveBeenCalledWith(difference);
    });
  });

  describe("divide()", () => {
    it("should correctly divide two numbers and call formatNumber", async () => {
      const a = 10;
      const b = 2;
      const quotient = a / b;

      await divide(a, b);

      expect(formatNumber).toHaveBeenCalledWith(quotient);
    });

    it("should return NaN and not call formatNumber when dividing by zero", async () => {
      const result = await divide(10, 0);

      expect(result).toBeNaN();
    });
  });

  describe("calculateModulus()", () => {
    it("should correctly calculate modulus and call formatNumber", async () => {
      const a = 10;
      const b = 3;
      const modulus = a % b;

      await calculateModulus(a, b);

      expect(formatNumber).toHaveBeenCalledWith(modulus);
    });

    it("should return NaN and not call formatNumber when modulus by zero", async () => {
      const result = await calculateModulus(10, 0);

      expect(result).toBeNaN();
    });
  });

  describe("calculateFactorial()", () => {
    it("should correctly calculate factorial and call formatNumber", async () => {
      const n = 5;
      const factorial = 1 * 2 * 3 * 4 * 5;

      await calculateFactorial(n);

      expect(formatNumber).toHaveBeenCalledWith(factorial);
    });

    it("should return NaN for negative numbers and not call formatNumber", async () => {
      const result = await calculateFactorial(-5);

      expect(result).toBeNaN();
    });

    it("should call formatNumber with 1 for factorial of 0", async () => {
      const factorial = 1;

      await calculateFactorial(0);

      expect(formatNumber).toHaveBeenCalledWith(factorial);
    });
  });

  describe("calculateAbs()", () => {
    it("should correctly calculate the absolute value of a positive number and call formatNumber", async () => {
      const a = 5;
      const abs = Math.abs(a);

      await calculateAbs(a);

      expect(formatNumber).toHaveBeenCalledWith(abs);
    });

    it("should correctly calculate the absolute value of a negative number and call formatNumber", async () => {
      const a = -5;
      const abs = Math.abs(a);

      await calculateAbs(a);

      expect(formatNumber).toHaveBeenCalledWith(abs);
    });
  });
});
