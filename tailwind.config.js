/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "almost-black": "#151515",
        "dark-grey": "#444",
        gold: "#d5966c",
      },
      spacing: {},
      fontFamily: {
        "body-m": "Outfit",
        "heading-m": "'Big Shoulders Display'",
      },
    },
    fontSize: {
      "3xl": "22px",
      "41xl": "60px",
      "77xl": "96px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
