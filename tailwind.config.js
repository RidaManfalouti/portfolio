/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emsi: {
          DEFAULT: '#00783C',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00783C',
          600: '#006533',
          700: '#00522a',
          800: '#004021',
          900: '#00331a',
        },
        dark: {
          950: '#000000',
          900: '#0a0a0a',
          850: '#121212',
          800: '#181818',
          700: '#242424',
        },
        electric: {
          300: '#86efac',
          400: '#4ade80',
          500: '#00783C',
          600: '#006533',
        },
        accent: {
          cyan: '#00783C',
          blue: '#00783C',
          violet: '#006533',
          purple: '#00522a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0, 120, 60, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(0, 120, 60, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
