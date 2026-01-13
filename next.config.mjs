/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
             {
                protocol: 'https',
                hostname: '*.builder-api.nepdora.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'builder-api.nepdora.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '*.nepdora.baliyoventures.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'nepdora.baliyoventures.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
