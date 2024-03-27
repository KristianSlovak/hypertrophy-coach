/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_SIDE_PROXY: process.env.SERVER_SIDE_PROXY,
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
