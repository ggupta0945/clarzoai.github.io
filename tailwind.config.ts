import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces — light, Stripe-style
        bg: {
          DEFAULT: "#ffffff",
          deep: "#ffffff",
          surface: "#f6f9fc",
          elevated: "#f6f9fc",
          soft: "#eef2f7",
          glass: "rgba(255,255,255,0.72)",
        },
        // Hairlines
        line: {
          DEFAULT: "rgba(10,37,64,0.06)",
          strong: "rgba(10,37,64,0.12)",
          accent: "rgba(16,185,129,0.28)",
        },
        // Text hierarchy — deep slate (Stripe-like)
        ink: {
          DEFAULT: "#0a2540",
          dim: "#425466",
          muted: "#697386",
          faint: "#aeb6cb",
        },
        // Primary brand accent — finance emerald
        accent: {
          DEFAULT: "#10b981",
          light: "#34d399",
          deep: "#059669",
          glow: "rgba(16,185,129,0.22)",
          soft: "#d1fae5",
        },
        // Secondary accents
        gold: {
          DEFAULT: "#f5c842",
          light: "#fde68a",
          deep: "#b45309",
          soft: "#fef3c7",
        },
        chart: {
          blue: "#5b9bff",
          purple: "#7a73ff",
          red: "#ef4444",
          amber: "#f59e0b",
          mint: "#a7f3d0",
          peach: "#fed7aa",
          sky: "#bae6fd",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 6.5vw, 5.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.5vw, 3.75rem)",
          { lineHeight: "1.04", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        eyebrow: ["0.72rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(10,37,64,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "aurora": "aurora 22s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.04)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(60px,-40px) rotate(10deg)" },
        },
      },
      boxShadow: {
        // Stripe-style hairline + soft shadow stack
        "card":
          "0 1px 2px rgba(10,37,64,0.04), 0 8px 24px -8px rgba(10,37,64,0.08)",
        "card-hover":
          "0 1px 2px rgba(10,37,64,0.06), 0 24px 48px -16px rgba(10,37,64,0.16)",
        "glow-accent": "0 12px 32px -8px rgba(16,185,129,0.35)",
        "glow-gold": "0 12px 32px -8px rgba(245,200,66,0.3)",
        "ring-soft": "0 0 0 4px rgba(16,185,129,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
