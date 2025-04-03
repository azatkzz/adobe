import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000', // Adobe Red
          light: '#FF4B2B',
          dark: '#CC0000',
        },
        secondary: {
          DEFAULT: '#FF4B2B', // Adobe Orange
          light: '#FF7A59',
          dark: '#CC3B22',
        },
        background: '#0F0F0F',
        surface: '#1A1A1A',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-6deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--primary), var(--secondary))',
      },
    },
  },
  plugins: [],
}

export default config;
