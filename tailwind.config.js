module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      animation: {
        fade1: 'fade1 15s infinite',
        fade2: 'fade2 15s infinite',
        fade3: 'fade3 15s infinite',
      },
      keyframes: {
        fade1: {
          '0%': { opacity: '1' },
          '33%': { opacity: '0' },
          '66%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fade2: {
          '0%': { opacity: '0' },
          '33%': { opacity: '1' },
          '66%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        fade3: {
          '0%': { opacity: '0' },
          '33%': { opacity: '0' },
          '66%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
