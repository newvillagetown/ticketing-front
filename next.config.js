/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    deviceSizes: [768, 1024, 1200],
    loader: "akamai",
    path: "/",
  },
};
