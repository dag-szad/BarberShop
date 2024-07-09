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
          '0%, 26.66%': { opacity: '1', zIndex: '1' },
          '33.33%, 100%': { opacity: '0', zIndex: '0' },
        },
        fade2: {
          '0%, 26.66%': { opacity: '0', zIndex: '0' },
          '33.33%, 60%': { opacity: '1', zIndex: '1' },
          '66.66%, 100%': { opacity: '0', zIndex: '0' },
        },
        fade3: {
          '0%, 60%': { opacity: '0', zIndex: '0' },
          '66.66%, 93.33%': { opacity: '1', zIndex: '1' },
          '100%': { opacity: '0', zIndex: '0' },
        },
      },
    },
  },
  plugins: [],
};
