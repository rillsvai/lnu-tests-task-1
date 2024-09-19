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
//
