import { COLORS } from "./settings/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      default: "var(--default-font)",
      ko: "var(--ko-font)",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "32px",
      xl: "42px",
    },
    letterSpacing: {
      tighter: "-1px",
      tight: "-0.3px",
    },
    colors: COLORS,
    extend: {},
  },
  plugins: [],
};
