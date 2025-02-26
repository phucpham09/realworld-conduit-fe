import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icons.veryicon.com',
                pathname: '/**', // Allow all paths
            },
        ],
    },
}

export default nextConfig
