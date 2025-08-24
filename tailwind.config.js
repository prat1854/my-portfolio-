/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        background: 'var(--background)',
        muted: 'var(--muted)',
      },
      animation: {
        'gradient-flow': 'gradient 3s ease infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'bounce': 'bounce 1s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'transform': 'scale(1.05)',
            'opacity': '0.8'
          },
          '50%': {
            'transform': 'scale(1)',
            'opacity': '1'
          },
        },
      },
    },
  },
  plugins: [],
} 