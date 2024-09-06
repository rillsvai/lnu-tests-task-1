import { formatNumber } from "./calculator.service";
import { getNumberFormat } from "../common/redis/redis.service";
import { supportedNumberFormats } from "./calculator.constants";

jest.mock("../common/redis/redis.service", () => ({
  getNumberFormat: jest.fn(),
}));

describe("formatNumber()", () => {
  const testCase = 255;

  Object.entries(supportedNumberFormats).forEach(([formatName, base]) => {
    it(`should format numbers correctly in ${formatName} (${base})`, async () => {
      getNumberFormat.mockResolvedValueOnce(base);
      const number = 255;

      const result = await formatNumber(number);
      const expected = number.toString(base);

      expect(result).toBe(expected);
    });
  });

  it("should default to decimal when redis returns no format", async () => {
    getNumberFormat.mockResolvedValueOnce(undefined);

    const result = await formatNumber(testCase);

    expect(result).toBe("255");
  });

  it("should handle error from redis and use fallback", async () => {
    getNumberFormat.mockRejectedValueOnce(new Error("redis error"));

    const result = await formatNumber(testCase);

    expect(result).toBe("255");
  });
});
