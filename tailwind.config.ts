import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070d",
          navy: "#0a0f1d",
          surface: "#0f1629",
          border: "#1e2942",
          borderGold: "#78581e",
          gold: {
            DEFAULT: "#d49e35",
            light: "#f5c568",
            dark: "#a6781b",
            glow: "rgba(212, 158, 53, 0.15)",
          },
          blue: {
            DEFAULT: "#0284c7",
            light: "#38bdf8",
            electric: "#00b4d8",
            glow: "rgba(0, 180, 216, 0.15)",
          },
          silver: {
            DEFAULT: "#cbd5e1",
            light: "#f1f5f9",
            dark: "#64748b",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "'Noto Sans Devanagari'", "system-ui", "-apple-system", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "'Noto Sans Devanagari'", "system-ui", "sans-serif"],
        hindi: ["'Noto Sans Devanagari'", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 158, 53, 0.3)",
        "blue-glow": "0 0 25px -5px rgba(0, 180, 216, 0.3)",
        "luxury-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-gradient": "linear-gradient(135deg, #f5c568 0%, #d49e35 50%, #9e6d11 100%)",
        "silver-gradient": "linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(15, 22, 41, 0.7) 0%, rgba(10, 15, 29, 0.9) 100%)",
        "glow-radial": "radial-gradient(circle at 50% 0%, rgba(212, 158, 53, 0.12) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
