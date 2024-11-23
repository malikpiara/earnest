// next.config.mjs
import withSerwist from '@serwist/next';

const serwistConfig = withSerwist({
  swSrc: "app/sw.js",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default serwistConfig(nextConfig);