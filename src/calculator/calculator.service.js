import { getNumberFormat } from "../common/redis/redis.service.js";
import { supportedNumberFormats } from "./calculator.constants.js";

export async function formatNumber(number) {
  try {
    const format = await getNumberFormat();
    return number.toString(format);
  } catch (error) {
    return number.toString(supportedNumberFormats.dec);
  }
}

export async function subtract(a, b) {
  const result = a - b;

  const formattedResult = await formatNumber(result);
  return formattedResult;
}

export async function add(a, b) {
  const result = a + b;

  const formattedResult = await formatNumber(result);
  return formattedResult;
}

export async function divide(a, b) {
  if (b === 0) {
    console.error("division by zero is not allowed");
    return NaN;
  }
  const result = a / b;
  return formatNumber(result);
}

export async function calculateModulus(a, b) {
  if (b === 0) {
    console.error("Division by zero is not allowed");
    return NaN;
  }
  const result = a % b;
  return formatNumber(result);
}

export async function calculateFactorial(n) {
  if (n < 0) {
    console.error("factorial is not defined for negative numbers");
    return NaN;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return formatNumber(result);
}

export async function calculateAbs(a) {
  const result = Math.abs(a);
  return formatNumber(result);
}
