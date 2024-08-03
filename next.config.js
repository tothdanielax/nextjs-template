import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
import bundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

// Import env here to validate during build. Using jiti we can import .ts files.
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti('./src/env.ts');

/**
 * Content-Security-Policy header value.
 */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/**
 * Configuration for Next.js.
 * @type {import('next').NextConfig}
 */
const config = {
  // The `reactStrictMode` flag helps identify issues in React. It mounts the components twice in development mode.
  reactStrictMode: true,

  // Disable the `X-Powered-By` header to prevent fingerprinting.
  poweredByHeader: false,

  // Force .ts and .tsx files to be used.
  pageExtensions: ['ts', 'tsx'],

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replaceAll('\n', ''),
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },

          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
};

/**
 * Plugins for Next.js.
 */
const plugins = [
  createNextIntlPlugin(),
  bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),
];

export default plugins.reduce((acc, plugin) => plugin(acc), config);
