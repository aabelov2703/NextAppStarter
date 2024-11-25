import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        light: "var(--light)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          0: "var(--primary-0)",
          1: "var(--primary-1)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          0: "var(--secondary-0)",
          1: "var(--secondary-1)",
        },
        neutral: {
          DEFAULT: "var(--neutral)",
          0: "var(--neutral-0)",
          1: "var(--neutral-1)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          0: "var(--warning-0)",
          1: "var(--warning-1)",
        },
        error: {
          DEFAULT: "var(--error)",
          0: "var(--error-0)",
          1: "var(--error-1)",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
