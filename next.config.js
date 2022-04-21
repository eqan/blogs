/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/blogs",
  assetPrefix: "/blogs",

};

module.exports = nextConfig;
