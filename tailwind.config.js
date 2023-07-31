/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      error: "#E22222",
      white: "#FFF",
      transparent: "transparent",
      disabledText: "#595B63",
      button: {
        primary: {
          default: "#93BC1E",
          hover: "#C4CF00",
        },
        secundary: {
          default: "#222429",
          hover: "#252932",
          textContent: "#ADFF2F",
        },

        disabled: {
          background: "#393D49",
          text: "#595B63",
        },
        active: "#93BC1E",
      },
      primary: "#C4CF00",
    },
    extend: {
      height: {
        440: "440px",
      },
      width: {
        972: "972px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
