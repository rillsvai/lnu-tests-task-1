import { createClient } from "redis";
import { supportedNumberFormats } from "../../calculator/calculator.constants.js";

export const redisClient = createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
});

redisClient.on("connect", () => {
  console.log("connected to redis successfully");
});

redisClient.on("error", (err) => {
  console.error("redis client encountered error:", err);
});

async function connectRedis() {
  try {
    await redisClient.connect();
    await redisClient.set("number-format", supportedNumberFormats.dec);
    console.log("default format has been set");
  } catch (error) {
    console.error("connection to redis has failed:", error);
  }
}

connectRedis();
