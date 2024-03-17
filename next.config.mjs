/** @type {import('next').NextConfig} */
const nextConfig = {
    // remotePatterns: [
    //     {
    //         protocol:'https',
    //         hotsname: 'image.tmdb.org',
    //         pathname:'**',
    //     }
    // ]
    images: {
        domains: ['image.tmdb.org'],
      },
};

export default nextConfig;
