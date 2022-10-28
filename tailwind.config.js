module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        whiteBlue: '#F3FFFF',
        lightBlue: '#C3F8FD',
        darkYellow: '#D5A31C',
        primary: '#6C76EA',
      },
    },
  },
  plugins: [],
}
