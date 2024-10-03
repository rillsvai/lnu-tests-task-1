import { getNumberFormat } from "../common/redis/redis.service";
import { supportedNumberFormats } from "./calculator.constants";
import { formatNumber } from "./calculator.utils";

jest.mock("../common/redis/redis.service", () => ({
  getNumberFormat: jest.fn(),
}));

describe("formatNumber()", () => {
  const testCase = 255;

  Object.entries(supportedNumberFormats).forEach(([formatName, base]) => {
    it(`should format numbers correctly in ${formatName} (${base})`, async () => {
      getNumberFormat.mockResolvedValueOnce(base);
      const result = await formatNumber(testCase);
      const expected = testCase.toString(base);

      expect(getNumberFormat).toHaveBeenCalled();
      expect(result).toBe(expected);
    });
  });

  it("should default to decimal when redis returns no format", async () => {
    getNumberFormat.mockResolvedValueOnce(undefined);

    const result = await formatNumber(testCase);

    expect(getNumberFormat).toHaveBeenCalled();
    expect(result).toBe("255");
  });

  it("should handle error from redis and use fallback", async () => {
    getNumberFormat.mockRejectedValueOnce(new Error("redis error"));

    const result = await formatNumber(testCase);

    expect(getNumberFormat).toHaveBeenCalled();
    expect(result).toBe("254");
  });
});
