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
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('https://raw.githubusercontent.com/joshim7m/hilink-travel/refs/heads/main/public/img-1.png')",
        "bg-img-2": "url('https://raw.githubusercontent.com/joshim7m/hilink-travel/refs/heads/main/public/img-2.png')",
        "feature-bg": "url('https://raw.githubusercontent.com/joshim7m/hilink-travel/refs/heads/main/public/feature-bg.png')",
        "pattern": "url('https://raw.githubusercontent.com/joshim7m/hilink-travel/refs/heads/main/public/pattern-bg.png')",
        "pattern-2": "url('https://raw.githubusercontent.com/joshim7m/hilink-travel/refs/heads/main/public/pattern.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
