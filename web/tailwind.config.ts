import defaultTheme from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)"],
      },
      fontSizes: {
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
      },
      colors: {
        calypso: {
          "50": "#f2f8f9",
          "100": "#ddedf0",
          "200": "#bfdbe2",
          "300": "#92bfce",
          "400": "#5e9cb2",
          "500": "#438097",
          "600": "#3c6d84",
          "700": "#34576a",
          "800": "#314a59",
          "900": "#2d404c",
          "950": "#1a2832",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          true: "hsl(var(--background-true))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          true: "hsl(var(--foreground-true))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.calypso.800"),
            "--tw-prose-headings": theme("colors.foreground"),
            "--tw-prose-links": theme("colors.foreground"),
            h1: {
              fontWeight: 600,
              fontSize: theme("fontSizes.xl"),
              letterSpacing: "-.02em",
            },
            h2: {
              fontWeight: 600,
              fontSize: theme("fontSizes.lg"),
              letterSpacing: "-.02em",
              marginBottom: "0.5em",
            },
            h3: {
              fontWeight: 600,
              fontSize: theme("fontSizes.md"),
              letterSpacing: "-.02em",
              marginBottom: "0.5em",
            },
            h4: {
              fontWeight: 550,
              fontSize: theme("fontSizes.base"),
              letterSpacing: "-.02em",
              marginBottom: "0.5em",
            },
            h5: {
              fontWeight: 400,
              fontSize: theme("fontSizes.base"),
              letterSpacing: "-.02em",
              marginBottom: "0.5em",
            },
            a: {
              textDecoration: "none",
              color: theme("colors.foreground.true"),
              "&:hover": {
                textDecoration: "underline",
                textDecorationColor: theme("colors.foreground"),
                textUnderlineOffset: "0.15em",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
