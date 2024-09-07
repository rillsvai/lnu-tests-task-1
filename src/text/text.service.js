import { promises as fs } from "fs";

export async function isSubstringInFile(substring, filePath) {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");

    return fileContent.includes(substring);
  } catch (error) {
    console.error("error reading file:", error);
    throw error;
  }
}
