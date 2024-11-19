import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: {
          100: "#fff",
        },
        red: {
          100: "#E50000",
        },
        grey: {
          100: "#999999",
        },
        black: {
          100: "#262626",
          200: "#0F0F0F",
          300: "#1a1a1a",
          400: "#141414",
          500: "#262626",
        },
      },
      spacing: {
        headerHeight: "98px",
      },
      fontFamily: {
        body: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
