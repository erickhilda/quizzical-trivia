module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: "#D6DBF5",
          500: "#4D5B9E",
          600: "#293264",
        },
        salmon: {
          300: "#F8BCBC",
        },
        leaf: {
          300: "#94D7A2",
        },
        smoke: '#F5F7FB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
