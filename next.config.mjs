/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true //ignorar errores en el build 
    },
    experimental: {
        //serverActions: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
