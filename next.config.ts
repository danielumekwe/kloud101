import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog post thumbnails from blog.kloud101.com (Blogger)
    remotePatterns: [new URL("https://blogger.googleusercontent.com/**")],
  },
};

export default nextConfig;
