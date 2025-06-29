/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        // Pastel and kawaii color palette
        'pink-pastel': '#FFD1DC',
        'pink-light': '#FFE8ED',
        'lavender-pastel': '#E6E6FA',
        'lavender-light': '#F2F2FF',
        'peach-pastel': '#FFDAB9',
        'peach-light': '#FFE8D6',
        'mint-pastel': '#D0F0C0',
        'baby-blue': '#D6ECFF',

        // Additional required colors used in gradients or effects
        'purple-300': '#D8B4FE',
        'purple-400': '#C084FC',
        'pink-50': '#FFF5F7',
        'pink-100': '#FFE4E6',
        'pink-200': '#FBCFE8',
        'pink-300': '#F9A8D4',
        'pink-400': '#F472B6',
        'pink-500': '#EC4899',
        'pink-600': '#DB2777',
        'orange-600': '#EA580C',
        'gray-600': '#4B5563',
        'gray-800': '#1F2937',
      },
    },
  },
  plugins: [],
}
