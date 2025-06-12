import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe': ['"Segoe UI"', 'system-ui', 'sans-serif'],
        sans: ['"Work Sans"', 'sans-serif'],
        heading: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      colors: {
        paper: '#FDF9F3',
        kraft: '#D1BFA4',
        ink: '#1A1A1A',
        yellow: {
          DEFAULT: '#F4C542',
          light: '#FFF4C1',
          dark: '#B89A2A',
        },
        orange: {
          DEFAULT: '#EB5939',
          light: '#FFB7A1',
          dark: '#A33924',
        },
        pink: {
          DEFAULT: '#F85C70',
          light: '#FFC5CC',
          dark: '#A03A4E',
        },
        green: {
          DEFAULT: '#4BAA58',
          light: '#B7EBC3',
          dark: '#2F6E39',
        },
        blue: {
          DEFAULT: '#275DDB',
          light: '#B3CAF2',
          dark: '#1E49A5',
        },
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
