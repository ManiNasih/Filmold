/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      colors: {
        text: {
          50: "#e5f5ff",
          100: "#ccebff",
          200: "#99d6ff",
          300: "#66c2ff",
          400: "#33adff",
          500: "#0099ff",
          600: "#007acc",
          700: "#005c99",
          800: "#003d66",
          900: "#001f33",
          950: "#000f1a",
        },
        background: {
          50: "#edf3f7",
          100: "#dce7ef",
          200: "#b9d0df",
          300: "#95b8d0",
          400: "#72a1c0",
          500: "#4f89b0",
          600: "#3f6e8d",
          700: "#2f526a",
          800: "#203746",
          900: "#101b23",
          950: "#080e12",
        },
        primary: {
          50: "#edf3f8",
          100: "#dae7f1",
          200: "#b5d0e3",
          300: "#90b8d5",
          400: "#6ba1c7",
          500: "#4689b9",
          600: "#386e94",
          700: "#2a526f",
          800: "#1c374a",
          900: "#0e1b25",
          950: "#070e12",
        },
        secondary: {
          50: "#fce9fa",
          100: "#f8d3f4",
          200: "#f1a7ea",
          300: "#ea7bdf",
          400: "#e34fd5",
          500: "#dd22ca",
          600: "#b01ca2",
          700: "#841579",
          800: "#580e51",
          900: "#2c0728",
          950: "#160314",
        },
        accent: {
          50: "#eff6ee",
          100: "#e0edde",
          200: "#c1dcbc",
          300: "#a2ca9b",
          400: "#83b979",
          500: "#64a758",
          600: "#508646",
          700: "#3c6435",
          800: "#284323",
          900: "#142112",
          950: "#0a1109",
        },
      },
      fontFamily: {
        Rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
