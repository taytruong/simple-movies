/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "#6F5CF1",
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        )`,
        "secondary-gradient": `linear-gradient(
          86.88deg,
          #20e3b2 1.38%,
          #2cccff 64.35%,
          #fc2872 119.91%
        )`,
        "input": "#e2e2e2",
      },
    },
  },
  plugins: [],
};
