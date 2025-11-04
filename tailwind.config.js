/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tech: {
          // Couleurs modernes Techwaves - Bleu électrique et dégradés
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',     // Bleu principal
          600: '#0284c7',     // Bleu foncé
          700: '#0369a1',     // Bleu très foncé
          800: '#075985',
          900: '#0c4a6e',
          electric: '#0066ff', // Bleu électrique
          neon: '#00d4ff',     // Bleu néon
          dark: '#0f172a',     // Fond sombre
          darker: '#020617',   // Fond très sombre
        }
      },
      fontFamily: {
        'century-gothic': ['Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'typewriter': 'typewriter 1.5s steps(40, end) forwards',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'expand-width': 'expandWidth 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#7dd3fc' },
        },
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
        'tech-gradient-dark': 'linear-gradient(135deg, #0369a1 0%, #00d4ff 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}