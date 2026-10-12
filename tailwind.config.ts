import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* Modern Biblical Academic palette */
          navy: "#142B45",
          "navy-dark": "#0E1D2F",
          "navy-light": "#1E3E64",
          forest: "#244D3A",
          "forest-dark": "#173426",
          "forest-light": "#2F654C",
          ivory: "#FAF8F2",
          "ivory-dark": "#F2ECE0",
          gold: "#C5A15B",
          "gold-light": "#DFBF7D",
          "gold-dark": "#A6833D",
          slate: "#475569",
          "slate-light": "#64748B",
          "slate-dark": "#334155",
          border: "#E5E0D8",

          /* Compatibility tokens mapped to new academic theme */
          primary: "#142B45",
          secondary: "#244D3A",
          purple: "#142B45",
          "purple-light": "#1E3E64",
          "purple-dark": "#0E1D2F",
          soft: "#FAF8F2",
          light: "#FAF8F2",
          card: "#FFFFFF",
          "card-alt": "#F5F1E8",
          muted: "#475569",
          accent: "#C5A15B",
          "cta-text": "#142B45",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        serif: ["var(--font-heading)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #142B45 0%, #0E1D2F 100%)",
        "gradient-forest":
          "linear-gradient(135deg, #244D3A 0%, #173426 100%)",
        "gradient-academic":
          "linear-gradient(135deg, #142B45 0%, #244D3A 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #DFBF7D 0%, #C5A15B 100%)",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(20, 43, 69, 0.06), 0 2px 6px -1px rgba(20, 43, 69, 0.04)",
        "card-hover": "0 16px 36px -4px rgba(20, 43, 69, 0.12), 0 4px 12px -2px rgba(20, 43, 69, 0.06)",
        "gold-glow": "0 0 25px -5px rgba(197, 161, 91, 0.35)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
