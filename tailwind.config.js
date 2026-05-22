/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070707', // Very deep rich dark for a premium Apple/Linear feel
        surface: '#111111', // Slightly lighter for cards
        surfaceHover: '#1a1a1a',
        gold: {
          light: '#fce2a1',
          DEFAULT: '#d4af37', // The signature luxury gold
          dark: '#b8860b',
        },
        champagne: '#f0e6d2',
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa', // Zinc-400 equivalent for elegant muting
          tertiary: '#52525b', // Zinc-600
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'sans-serif'],
        display: ['Clash Display', 'General Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #d4af3733 0deg, #d4af3700 180deg, #d4af3733 360deg)',
      },
      animation: {
        'slow-pan': 'pan 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
