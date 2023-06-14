/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      "components",
      "services",
      "settings",
      "utils",
      "pages",
      "adapters",
      "queries",
    ],
  },
};

module.exports = nextConfig;
