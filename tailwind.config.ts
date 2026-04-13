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
        "cyber-black": "#050505",
        "cyber-white": "#EBEBEB",
        emerald: {
          DEFAULT: "#10b981",
          glow: "rgba(16, 185, 129, 0.2)",
        },
      },
      borderRadius: {
        "2.5xl": "2.5rem",
      },
      letterSpacing: {
        tightest: "-0.06em",
        widest: "0.2em",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      backgroundImage: {
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent)",
      },
      transitionTimingFunction: {
        "cyber-bezier": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "pulse-fast": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer-border": "shimmer 4s linear infinite",
        "pulse-emerald": "pulse-emerald 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        "morph-glow": "morph 8s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-emerald": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
          "50%": { boxShadow: "0 0 25px 10px rgba(16, 185, 129, 0)" },
        },
        morph: {
          "0%": { borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%" },
          "100%": { borderRadius: "60% 40% 40% 60% / 30% 70% 30% 70%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
