/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    APP_NAME: "BLockXChallenge",
    ALCHEMY_ID: "cQDa5gfo9RWbuJdm8lHtProXtl4EzC0G",
    WEB3_PROJECT_ID: "27e6943270a07950e2f59c099fc5d3f1",
    CONTRACT_ADDRESS: "0x779537F265e508c3eCA407FfA342a64489C2d3C9",
  },
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
