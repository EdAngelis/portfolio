/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ghchart.rshah.org",
        port: "",
        pathname: "/0D7CFF/EdAngelis/*",
      },
    ],
  },
};

module.exports = nextConfig;
