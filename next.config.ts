import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 開発環境でのハイドレーションエラーを抑制（本番環境では使用しない）
  ...(process.env.NODE_ENV === 'development' && {
    reactStrictMode: false,
  }),
};

export default nextConfig;
