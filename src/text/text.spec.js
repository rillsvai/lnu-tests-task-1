import { promises as fs } from "fs";
import { isSubstringInFile } from "./text.service";

jest.mock("fs", () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

describe("isSubstringInFile", () => {
  const mockFilePath = "/path/to/mockfile.txt";

  it("should return true if the substring is present in the file content", async () => {
    const mockFileContent = "This is a test file content.";
    fs.readFile.mockResolvedValueOnce(mockFileContent);

    const result = await isSubstringInFile("test", mockFilePath);

    expect(result).toBe(true);
  });

  it("should return false if the substring is not present in the file content", async () => {
    const mockFileContent = "another piece of text content.";
    fs.readFile.mockResolvedValueOnce(mockFileContent);

    const result = await isSubstringInFile("missing", mockFilePath);

    expect(result).toBe(false);
  });

  it("should throw an error if there is an issue reading the file", async () => {
    const mockError = new Error("File read error");
    fs.readFile.mockRejectedValueOnce(mockError);

    await expect(isSubstringInFile("test", mockFilePath)).rejects.toThrow(
      "File read error"
    );
  });
});
