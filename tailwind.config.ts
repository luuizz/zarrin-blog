import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1236px",
      },
      colors: {
        brand: "#7C4EE4",
        "gray-scale": {
          100: "#999999",
          200: "#666666",
          300: "#373737",
          400: "#333333",
          500: "#150e06",
        },
      },
      backgroundImage: {
        "element-hero": 'url("../assets/wave.svg")',
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
export default config;
