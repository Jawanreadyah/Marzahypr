/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'heading-black': '#1F2937',
      },
    },
  },
  plugins: [],
};
