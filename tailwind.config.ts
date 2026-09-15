import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f5',
          100: '#f5ebeb',
          200: '#e8d7d7',
          300: '#dbc2c2',
          400: '#c09999',
          500: '#a57171',
          600: '#935a5a',
          700: '#7a484a',
          800: '#61373a',
          900: '#4d2c2d',
          950: '#2a1617',
        },
        secondary: {
          50: '#fef5f0',
          100: '#fdeae2',
          200: '#fad5c5',
          300: '#f7bea6',
          400: '#f39f82',
          500: '#ed7b5a',
          600: '#d85e3d',
          700: '#b84725',
          800: '#973a21',
          900: '#7a2e1d',
          950: '#421510',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
