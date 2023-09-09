/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    APP_NAME: "BLockXChallenge",
    ALCHEMY_ID: "b1b2b3b4b5b6b7b8b9b0",
    WEB3_PROJECT_ID: "b1b2b3b4b5b6b7b8b9b0",
    CONTRACT_ADDRESS: "0x5f4efaAE950d4C487B986987E32fDD34f9B732Fb",
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
