/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "media.newyorker.com",
        },
        {
          protocol: "https",
          hostname: "upload.wikimedia.org",
        },
        {
          protocol: "https",
          hostname: "news.mit.edu",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  