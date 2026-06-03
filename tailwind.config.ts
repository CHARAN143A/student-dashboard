import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        "bg-base":     "#080c12",
        "bg-surface":  "#0d1117",
        "bg-elevated": "#131920",
        "bg-overlay":  "#1a2130",
        
        "border-subtle":  "#1e2736",
        "border-default": "#28374a",
        "border-bright":  "#3a506b",
        
        "text-primary":   "#e2eaf4",
        "text-secondary": "#94a3b8",
        "text-muted":     "#4d6280",
      
        "brand-indigo":   "#6366f1",
        "brand-violet":   "#8b5cf6",
        "brand-cyan":     "#22d3ee",
        "brand-emerald":  "#10b981",
        "brand-amber":    "#f59e0b",
        "brand-rose":     "#f43f5e",
      },
      backgroundImage: {
        "mesh-1": "radial-gradient(ellipse at 15% 40%, rgba(99,102,241,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(34,211,238,0.07) 0%, transparent 50%)",
        "mesh-2": "radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.1) 0%, transparent 50%)",
      },
      fontWeight: {
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      boxShadow: {
        "glow-indigo": "0 0 24px rgba(99,102,241,0.25), 0 0 60px rgba(99,102,241,0.08)",
        "glow-violet": "0 0 24px rgba(139,92,246,0.2), 0 0 60px rgba(139,92,246,0.07)",
        "glow-cyan":   "0 0 24px rgba(34,211,238,0.18), 0 0 60px rgba(34,211,238,0.06)",
      },
      animation: {
        "shimmer":      "shimmer 1.8s ease-in-out infinite",
        "glow-pulse":   "glow-pulse 3s ease-in-out infinite",
        "float":        "float 6s ease-in-out infinite",
        "streak-fire":  "streak-fire 1.5s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.15)" },
          "50%":       { boxShadow: "0 0 40px rgba(99,102,241,0.35)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-6px)" },
        },
        "streak-fire": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%":       { transform: "scaleY(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
