import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple78: "#A290FC",
        purple84: "#BBAEFD",
        purple88: "#CBC2FE",
        purple92: "#DCD6FE",
        purple97: "#F2F0FE",
        purple99: "#FBFAFE",
        dark: "#050505",
        dark02: "#050505",
        dark06: "#101010",
        dark08: "#141414",
        dark10: "#191919",
        dark12: "#1F1F1F",
        dark13: "#212121",
        dark16: "#282828",
        dark18: "#2D2D2D",
        dark22: "#383838",
        dark25: "#404040",
        grey40: "#666666",
        grey46: "#757575",
        grey60: "#999999",
        grey80: "#CCCCCC",
        grey85: "#D9D9D9",
        grey90: "#E6E6E6",
        grey95: "#F2F2F2",
        grey99: "#FCFCFC",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
