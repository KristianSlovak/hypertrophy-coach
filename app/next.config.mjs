/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_SIDE_PROXY: process.env.SERVER_SIDE_PROXY,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.SERVER_SIDE_PROXY || "*",
          }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Rewrites all API requests to your Express server
      {
        source: "/api/:path",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};

export default nextConfig;
