import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#14171F", paper: "#F4F6FB", brand: "#2748FF", sun: "#FFD23F", coral: "#FF6B57", mint: "#3DDC97" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
      boxShadow: { hard: "5px 5px 0 0 #14171F", "hard-sm": "3px 3px 0 0 #14171F" },
    },
  },
  plugins: [],
};
export default config;
