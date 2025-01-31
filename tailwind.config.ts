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
        background: "var(--background)",
        foreground: "var(--foreground)", 
        navy: {
          customNavy: "#04033f",
        },
      },
      animation: {
        "spin-slow": "spin 60s linear infinite", 
        blink: "blink 1.2s step-start infinite", 
      },
      keyframes: {
        blink: {
          
        },
      },
    },
  },
  plugins: [],
};

export default config;
