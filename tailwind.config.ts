import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "m-d8": "#D8D8D8",
        "m-eb": "#EBEBEB",
        "m-green-0": "#55FF33",
      },
      boxShadow: {
        "shadow-1": "0px 0px 24px 4px rgba(130, 140, 230, 0.7)",
        "shadow-2": "4px 4px 24px 4px rgba(130, 140, 230, 0.7)",
        "shadow-light": "4px 4px 24px 4px rgba(215, 236, 255, 0.75)",
        "shadow-dark": "4px 4px 24px 4px rgba(50, 30, 10, 0.75)",
      },
    },
  },
  plugins: [],
};
export default config;
