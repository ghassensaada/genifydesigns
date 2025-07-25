/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.fal.ai', 'via.placeholder.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || 'default_value',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Handle undici compatibility
    config.externals = config.externals || [];
    config.externals.push({
      'undici': 'commonjs undici',
    });
    
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'],
  },
}

module.exports = nextConfig 