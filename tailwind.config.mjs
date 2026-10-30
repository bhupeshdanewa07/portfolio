/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Syntactic Void & Stitch Design Tokens
        "surface": "#0f131c",
        "surface-dim": "#0f131c",
        "surface-bright": "#353943",
        "surface-container-lowest": "#0a0e17",
        "surface-container-low": "#181b25",
        "surface-container": "#1c1f29",
        "surface-container-high": "#262a34",
        "surface-container-highest": "#31353f",
        "surface-variant": "#31353f",
        "surface-tint": "#c0c1ff",
        "on-surface": "#dfe2ef",
        "on-surface-variant": "#c7c4d7",
        "inverse-surface": "#dfe2ef",
        "inverse-on-surface": "#2c303a",
        "outline": "#908fa0",
        "outline-variant": "#464554",
        "primary": "#c0c1ff",
        "on-primary": "#1000a9",
        "primary-container": "#8083ff",
        "on-primary-container": "#0d0096",
        "inverse-primary": "#494bd6",
        "primary-fixed": "#e1e0ff",
        "primary-fixed-dim": "#c0c1ff",
        "on-primary-fixed": "#07006c",
        "on-primary-fixed-variant": "#2f2ebe",
        "secondary": "#4edea3",
        "on-secondary": "#003824",
        "secondary-container": "#00a572",
        "on-secondary-container": "#00311f",
        "secondary-fixed": "#6ffbbe",
        "secondary-fixed-dim": "#4edea3",
        "on-secondary-fixed": "#002113",
        "on-secondary-fixed-variant": "#005236",
        "tertiary": "#7bd0ff",
        "on-tertiary": "#00354a",
        "tertiary-container": "#009bd1",
        "on-tertiary-container": "#002d40",
        "tertiary-fixed": "#c4e7ff",
        "tertiary-fixed-dim": "#7bd0ff",
        "on-tertiary-fixed": "#001e2c",
        "on-tertiary-fixed-variant": "#004c69",
        "background": "#0f131c",
        "on-background": "#dfe2ef",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        // High-Precision Spec Aliases
        "void-bg": "#090D16",
        "card-surface": "#111827",
        "hairline-border": "#1F2937",
        "border-hover": "#374151",
        "electric-indigo": "#6366F1",
        "emerald-accent": "#10B981",
        "cyan-telemetry": "#38BDF8"
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "gutter": "1.25rem",
        "margin": "1.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        "display-xl": ["Plus Jakarta Sans", "sans-serif"],
        "display-xl-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "code-inline": ["JetBrains Mono", "monospace"],
        "metric-val": ["JetBrains Mono", "monospace"],
        "tag-label": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "display-xl-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "code-inline": ["13px", { lineHeight: "18px", fontWeight: "500" }],
        "metric-val": ["28px", { lineHeight: "32px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "tag-label": ["11px", { lineHeight: "14px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};

