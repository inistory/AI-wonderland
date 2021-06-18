const { POSTCSS_MODES } = require('@craco/craco');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
