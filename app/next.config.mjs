/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Rewrites all API requests to your Express server
      {
        source: "/",
        destination: "http://localhost:3001/",
      },
    ];
  },
};

export default nextConfig;
