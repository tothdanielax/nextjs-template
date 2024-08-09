/**
 * Configuration for PostCSS.
 * @see https://postcss.org/
 * @see https://tailwindcss.com/docs/using-with-preprocessors
 */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    // https://tailwindcss.com/docs/optimizing-for-production
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};

module.exports = config;
