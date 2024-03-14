/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1880374422,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "93027b65feb27283ae26fb6c5d9ab993",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
