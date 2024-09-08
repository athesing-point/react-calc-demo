module.exports = {
  content: ["./packages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "point-blue": "#0055FF",
        "point-dark-blue": "#003DB6",
        "point-bg": "#F7F9FC",
        "point-text": "#1A1A1A",
        "point-light-text": "#6E7C87",
      },
    },
  },
  plugins: [],
  compilerOptions: {
    baseUrl: "./",
    paths: {
      "*": ["packages/calculator-basic/src/*"],
    },
  },
};
