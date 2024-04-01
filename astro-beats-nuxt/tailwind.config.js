/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: "#49446f",
      secondary: {
        100: "#29325c",
        200: "#393865",
      },
      background: "#212121",
      "spotify-green": "#1db954",
      "spotify-dark": "#191414",
      "spotify-light": "#282828",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
