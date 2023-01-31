const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      "3xs": "340px",
      "2xs": "375px",
      xs: "640px",
      sm: "768px",
      md: "1025px",
      lg: "1440px",
      xl: "1536px",
      "2xl": "1750px",
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-bitter)", ...defaultTheme.fontFamily.serif],
      mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      base: "var(--font-size-base)",
    },
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-tint-0": "var(--color-bg-tint-0)",
        "bg-tint-1": "var(--color-bg-tint)",
        "bg-tint-2": "var(--color-bg-tint-2)",
        body: "var(--color-p)",
        "body-0": "var(--color-p-0)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        error: "var(--color-error)",
        success: "var(--color-success)",
        "success-shade": "var(--color-success-shade)",
      },
    },
  },
  plugins: [],
};
