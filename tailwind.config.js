module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        lightgray: '#f5f5f5',
        gray: '#f3f3f3',
        darkgray: '#5f5f5f',
        green: '#00FF86',
        purple: '#6456B6',
      },
    },
    screens: {
      'xs': '320px',
      'md': '768px',
    },
    borderColor: theme => ({
      default: theme('colors.gray', 'currentColor')
    }),
  }
}