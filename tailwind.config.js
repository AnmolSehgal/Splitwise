module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5BC5A6",
          50: "#FFFFFF",
          100: "#F2FAF8",
          200: "#CCEDE3",
          300: "#A6E0CF",
          400: "#81D2BA",
          500: "#5BC5A6",
          600: "#3EAF8E",
          700: "#31896F",
          800: "#236451",
          900: "#163E32",
        },
        secondary: {
          DEFAULT: "#B498DF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#EDE6F7",
          400: "#D0BFEB",
          500: "#B498DF",
          600: "#9871D3",
          700: "#7B4AC7",
          800: "#6335A9",
          900: "#4C2982",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
