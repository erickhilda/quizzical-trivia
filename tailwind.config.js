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
        salmon: "#F8BCBC",
        leaf: "#94D7A2",
        smoke: '#F5F7FB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
