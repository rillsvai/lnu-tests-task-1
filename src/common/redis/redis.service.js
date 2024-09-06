import { supportedNumberFormats } from "../../calculator/calculator.constants.js";
import { redisClient } from "./redis.config.js";
import { fallbackMessage, NUMBER_FORMAT_KEY } from "./redis.constants.js";

export async function getNumberFormat() {
  try {
    const format = await redisClient.get(NUMBER_FORMAT_KEY);

    if (!format) {
      console.warn(`number format not found for key: ${NUMBER_FORMAT_KEY}`);
      console.warn(fallbackMessage);
      return supportedNumberFormats.dec;
    }

    return format;
  } catch (error) {
    console.error(`failed to get number format from redis: ${error}`);
    console.warn(fallbackMessage);
    throw new Error("failed to get number format from redis");
  }
}
