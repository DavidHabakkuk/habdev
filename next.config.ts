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
        background: "var(--background)", // Custom CSS variable
        foreground: "var(--foreground)", // Custom CSS variable
        navy: {
          customNavy: "#04033f",
        },
      },
      animation: {
        "spin-slow": "spin 60s linear infinite", 
        // skill rotational language
        blink: "blink 1.2s step-start infinite", //  Animation blinking cursor
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

export default config;
