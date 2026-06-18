import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warna utama sesuai brief: Clean Off-White & Dark Charcoal
        offwhite: "#FBFBFB",
        charcoal: "#1A1A1A",
        // Aksen emas untuk mockup proyek "MENJELAJAHI NUSANTARA"
        gold: {
          DEFAULT: "#D8B25C",
          dark: "#A9802F",
          light: "#EBD9A8",
        },
      },
      fontFamily: {
        // Playfair Display -> heading puitis/serif
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        // Inter -> narasi, tombol, menu
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
