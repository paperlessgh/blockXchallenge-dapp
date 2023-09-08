/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "influx-ng.hibotheme.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.stamp.fyi",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
