/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['lh3.google.com', 'drive.google.com'],
    },
}

module.exports = nextConfig
