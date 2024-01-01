export const BASE_HOST =
  process.env.NEXT_PUBLIC_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  "localhost:3000";

export const BASE_URL = BASE_HOST.startsWith("localhost")
  ? `http://${BASE_HOST}`
  : `https://${BASE_HOST}`;
