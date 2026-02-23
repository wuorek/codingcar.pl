import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        bg: "oklch(10% 0.015 45)",
        "bg-2": "oklch(15% 0.02 45)",
        "bg-3": "oklch(20% 0.025 45)",
        accent: "oklch(65% 0.185 50)",
        "accent-bright": "oklch(72% 0.20 50)",
        "text-primary": "oklch(94% 0.012 80)",
        "text-muted": "oklch(58% 0.04 65)",
        "border-dim": "oklch(22% 0.022 45)",
        "border-light": "oklch(30% 0.028 45)",
      },
      animation: {
        "circuit-drift": "circuitDrift 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scan-line": "scanLine 2s ease-in-out infinite",
        grain: "grain 0.8s steps(1) infinite",
      },
      keyframes: {
        circuitDrift: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-20px) translateY(-10px)" },
          "50%": { transform: "translateX(-40px) translateY(0)" },
          "75%": { transform: "translateX(-20px) translateY(10px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scanLine: {
          "0%": { top: "-100%" },
          "100%": { top: "200%" },
        },
        grain: {
          "0%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -2%)" },
          "50%": { transform: "translate(-3%, 1%)" },
          "60%": { transform: "translate(2%, 3%)" },
          "70%": { transform: "translate(-4%, -1%)" },
          "80%": { transform: "translate(1%, -4%)" },
          "90%": { transform: "translate(-2%, 2%)" },
          "100%": { transform: "translate(3%, -3%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
