import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#101010",
          card: "#1C1C1C",
          accent: "#FF6B1A",
          text: "#FFFFFF",
          muted: "#A3A3A3",
          border: "#303030",
          surface: "#252525",
          success: "#22C55E",
          error: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};

export default config;