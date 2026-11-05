/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Tone-aware tokens: each card sets these via .tone-light / .tone-dark / .tone-green
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        onaccent: "rgb(var(--onaccent) / <alpha-value>)",
        // Fixed palette
        ink: "#0c0d0c",
        snow: "#f6f7f2",
        lime: "#b5ef8a",
        fog: "#dcdfd6",
      },
      fontFamily: {
        display: ['"Archivo"', '"Inter Tight"', "system-ui", "sans-serif"],
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
