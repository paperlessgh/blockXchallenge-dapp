/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    APP_NAME: "BLockXChallenge",
    ALCHEMY_ID: "cQDa5gfo9RWbuJdm8lHtProXtl4EzC0G",
    WEB3_PROJECT_ID: "27e6943270a07950e2f59c099fc5d3f1",
    CONTRACT_ADDRESS: "0xfCc955BEcC20f6AB2E4F2b58A727F19D38BC12e0",
    GRAPHQL_ENDPOINT: "https://api.thegraph.com/subgraphs/name/likemdzokoto/challengepool",
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
