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
        gray: {
          50: "#FFF6EC",
          100: "#F7F4F1",
          200: "#CCBEB1",
          300: "#B8A79A",
          400: "#9B8778",
          500: "#7A6656",
          600: "#664C36",
          700: "#4D3623",
          800: "#331C08",
          900: "#331C08",
        },
        red: {
          50: "#FFF6EC",
          100: "#FFD3AC",
          200: "#FFD3AC",
          500: "#664C36",
          600: "#4D3623",
          700: "#331C08",
        },
        green: {
          50: "#FFF6EC",
          100: "#FFD3AC",
          500: "#664C36",
          600: "#4D3623",
          700: "#331C08",
        },
        brand: {
          /* Breakfast tea palette */
          primary: "#664C36",
          secondary: "#331C08",
          purple: "#664C36",
          "purple-light": "#FFD3AC",
          "purple-dark": "#331C08",
          soft: "#FFF6EC",
          light: "#F7F4F1",
          card: "#CCBEB1",
          muted: "#7A6656",
          accent: "#FFD3AC",
          gold: "#FFD3AC",
          "gold-light": "#FFD3AC",
          "gold-dark": "#E7BD98",
          "cta-text": "#331C08",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #664C36 0%, #331C08 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #FFD3AC 0%, #CCBEB1 100%)",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(51, 28, 8, 0.12)",
        "card-hover": "0 12px 32px -8px rgba(51, 28, 8, 0.2)",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
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
