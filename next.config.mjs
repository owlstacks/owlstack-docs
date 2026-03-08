import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/introduction' },
        { source: '/what-is-owlstack', destination: '/introduction/what-is-owlstack' },
        { source: '/why-owlstack', destination: '/introduction/why-owlstack' },
        { source: '/how-it-works', destination: '/introduction/how-it-works' },
        { source: '/quick-start', destination: '/introduction/quick-start' },
        { source: '/comparisons', destination: '/introduction/comparisons' },
        { source: '/comparisons/:path+', destination: '/introduction/comparisons/:path+' },
      ],
    };
  },
  async redirects() {
    return [
      { source: '/introduction', destination: '/', permanent: true },
      { source: '/introduction/:path+', destination: '/:path+', permanent: true },
    ];
  },
};

export default withMDX(config);
