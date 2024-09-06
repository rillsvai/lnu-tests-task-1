describe("subtract()", () => {
  it("should correctly call formatNumber with result of subtraction", async () => {
    await subtract(5, 3);
    expect(formatNumber).toHaveBeenCalledWith(2);
  });
});

describe("divide()", () => {
  it("should correctly call formatNumber with result of division", async () => {
    await divide(10, 5);
    expect(formatNumber).toHaveBeenCalledWith(2);
  });

  it("should return NaN when dividing by zero", async () => {
    const result = await divide(10, 0);
    expect(result).toBeNaN();
  });
});

describe("calculateModulus()", () => {
  it("should correctly call formatNumber with result of modulus", async () => {
    await calculateModulus(10, 3);
    expect(formatNumber).toHaveBeenCalledWith(1);
  });

  it("should return NaN when modulus by zero", async () => {
    const result = await calculateModulus(10, 0);
    expect(result).toBeNaN();
  });
});

describe("calculateFactorial()", () => {
  it("should correctly call formatNumber with result of factorial", async () => {
    await calculateFactorial(5);
    expect(formatNumber).toHaveBeenCalledWith(120);
  });

  it("should return NaN for factorial of a negative number", async () => {
    const result = await calculateFactorial(-1);
    expect(result).toBeNaN();
  });

  it("should call formatNumber with 1 for factorial of 0", async () => {
    await calculateFactorial(0);
    expect(formatNumber).toHaveBeenCalledWith(1);
  });
});

describe("calculateAbs()", () => {
  it("should correctly call formatNumber with absolute value of a positive number", async () => {
    await calculateAbs(5);
    expect(formatNumber).toHaveBeenCalledWith(5);
  });

  it("should correctly call formatNumber with absolute value of a negative number", async () => {
    await calculateAbs(-5);
    expect(formatNumber).toHaveBeenCalledWith(5);
  });
});
