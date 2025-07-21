import { createClient } from "microcms-js-sdk";

// 環境変数の確認
const serviceDomain = "rsz3ipo0sd";
const apiKey = process.env.API_KEY || "your_api_key_here";

console.log('Service Domain:', serviceDomain);
console.log('API Key:', apiKey ? 'Set' : 'Not set');

if (!apiKey || apiKey === "your_api_key_here") {
  console.error('Please set your actual API_KEY in .env.local file');
  throw new Error('Valid API_KEY is required');
}

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});