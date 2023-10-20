const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      navyblue: '#000053',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
})
