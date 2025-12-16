import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/design-system/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            spacing: {
                2: "var(--space-2)",
                4: "var(--space-4)",
                6: "var(--space-6)",
                8: "var(--space-8)",
                12: "var(--space-12)",
                16: "var(--space-16)",
                24: "var(--space-24)",
                32: "var(--space-32)",
                48: "var(--space-48)",
                64: "var(--space-64)",
            },
            colors: {
                bg: {
                    primary: "var(--bg-primary)",
                    surface: "var(--bg-surface)",
                },
                text: {
                    primary: "var(--text-primary)",
                    muted: "var(--text-muted)",
                },
                accent: {
                    brand: "var(--accent-brand)",
                },
            },
            borderRadius: {
                xs: "var(--radius-xs)",
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
                '2xl': "var(--radius-2xl)",
                full: "var(--radius-full)",
            },
        },
    },
    plugins: [],
};
export default config;
