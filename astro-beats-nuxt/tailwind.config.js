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
      primary: "#b4a2fc",
      secondary: "",
      //TODO: add more shades
      //     {
      //   100: "#b4a2fc",
      //   200: "#b4a2fc",
      // },
      background: "#100821",
      "spotify-green": "#1db954",
      "spotify-dark": "#191414",
      "spotify-light": "#282828",
      white: "#ffffff",
      black: "#000000",
      red: "#ff0000",
    },
    extend: {},
  },
  plugins: [],
};
