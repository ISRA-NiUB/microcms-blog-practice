import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "rsz3ipo0sd",
  apiKey: process.env.API_KEY,
});